// authentication component for validating any given route
// uses google o-auth 2.0 api for the purpose of authentication
// uses the isSignedIn state variable to manage the state of login for the user
/* global gapi */
import React, { Component } from "react";
import { CLIENT_ID } from "./../../utility/constants.js";
import { Link } from "react-router-dom";
import KickStart from "./../../navigation";
import Profile from "./../../navigation/profile";
import Dashboard from "./../../navigation/dashboard";
import Routing from "./../../navigation/routing";
import NavBar from "./../../navigation/navbar";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import HeaderSeparator from "./../header_separator";
import SignUp from "./../signup";
import {
  HOST_NAME,
  POST_PROFILE_DATA,
  VALIDATE_USER,
  UA_LOGIN
} from "./../../utility/constants.js";
import axios from "axios";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      userId: "",
      profileName: "",
      profileEmail: "",
      profilePhotoURL: ""
    };
  }

  // sets the state once signed in and calls the renderer
  // uses the o-auth 2.0 api
  componentDidMount() {
    const successCallback = this.onSuccess.bind(this);
    window.gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id: CLIENT_ID
      });
      this.auth2.then(() => {
        let basicProfile = window.gapi.auth2
          .getAuthInstance()
          .currentUser.get()
          .getBasicProfile();
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
          userId: basicProfile.getId() || "",
          profileName: basicProfile.getName() || "",
          profileEmail: basicProfile.getEmail() || "",
          profilePhotoURL: basicProfile.getImageUrl() || ""
        });
      });
    });

    this.callRender(successCallback);
  }
  // success renderer
  // requires the callback function as a param
  callRender = successCallback => {
    window.gapi.load("signin2", function() {
      // using this method will show Signed In if the user is already signed in
      var opts = {
        width: 0,
        height: 0,
        client_id: CLIENT_ID,
        onsuccess: successCallback,
        longTitle: false,
        theme: "dark"
      };
      gapi.signin2.render("loginButton", opts);
    });
  };

  // logout and reset the signedIn state variable
  logout = redirectTo => {
    if (this.state.isSignedIn) {
      window.gapi.auth2
        .getAuthInstance()
        .signOut()
        .then(() => {
          this.setState(
            {
              isSignedIn: this.auth2.isSignedIn.get()
            },
            () => {
              localStorage.setItem("signedIn", false);
              this.urlRedirect(redirectTo || HOST_NAME);
            }
          );
        });
    } else {
      console.info("Already Signed In");
    }
  };

  // redirects to the home page
  // requires home page url as param
  urlRedirect = url => {
    var X = setTimeout(function() {
      window.location.replace(url);
      return true;
    }, 300);

    if ((window.location = url)) {
      clearTimeout(X);
      return true;
    } else {
      if ((window.location.href = url)) {
        clearTimeout(X);
        return true;
      } else {
        clearTimeout(X);
        window.location.replace(url);
        return true;
      }
    }
  };

  // updates or inserts the first time authority profile after logging in
  validateAndPostProfileData = basicProfile => {
    axios
      .post(VALIDATE_USER, {
        data: {
          emailId: basicProfile.getEmail()
        }
      })
      .then(response => {
        if (response.data === "allowed") {
          axios.post(POST_PROFILE_DATA, {
            data: {
              userId: basicProfile.getId(),
              emailId: basicProfile.getEmail(),
              name: basicProfile.getName(),
              photoURL: basicProfile.getImageUrl()
            }
          });
        } else {
          this.logout(UA_LOGIN);
          console.info("Unauthorized Login");
        }
      })
      .catch(err => {
        this.logout();
        console.info("Cannot login at this time!");
      });
  };

  // success callback
  // sets the local storage and the state variable
  // sets the profile data state variables
  // posts the profile data to the server
  onSuccess() {
    let basicProfile = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile();
    localStorage.setItem("signedIn", true);
    this.setState(
      {
        isSignedIn: true,
        err: null,
        userId: basicProfile.getId(),
        profileName: basicProfile.getName(),
        profileEmail: basicProfile.getEmail(),
        profilePhotoURL: basicProfile.getImageUrl()
      },
      () => {
        this.validateAndPostProfileData(basicProfile);
      }
    );
  }

  // on failure to login sets
  // the state varibales accordingly
  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err
    });
  }

  // associates the nav bar after successful sign in
  navigationBar = () => {
    return (
      <div>
        {" "}
        <NavBar />
        <Link to="/report">
          <Fab
            color="secondary"
            aria-label="add"
            style={{
              position: "fixed",
              zIndex: 1,
              right: 0,
              bottom: 0,
              marginRight: "25px",
              marginBottom: "25px"
            }}
          >
            <AddIcon />
          </Fab>
        </Link>
        <HeaderSeparator />{" "}
      </div>
    );
  };

  // to check if user is blocked (in current session itself)
  isBlocked = () => {
    axios
      .post(VALIDATE_USER, {
        data: {
          emailId: this.state.profileEmail
        }
      })
      .then(response => {
        if (response.data !== "allowed") {
          this.logout(UA_LOGIN);
          console.info("Unauthorized Login");
        }
      })
      .catch(err => {
        this.logout();
        console.info("Cannot login at this time!");
      });
  };

  // on the basis of login status renders the associated component
  // and passes it the required params
  loginStatus() {
    if (localStorage.getItem("signedIn") === "true" && this.state.isSignedIn) {
      this.isBlocked();
      switch (this.props.linkTo) {
        case "/dashboard":
          return (
            <div>
              <Dashboard userId={this.state.userId} />
              {this.navigationBar()}
            </div>
          );
        case "/report":
          return (
            <div>
              <KickStart userId={this.state.userId} />
              {this.navigationBar()}
            </div>
          );
        case "/logout":
          this.logout();
          break;
        case "/routing":
          return (
            <div>
              <Routing userId={this.state.userId} />
              {this.navigationBar()}
            </div>
          );
        case "/profile":
          return (
            <div>
              <Profile
                userId={this.state.userId}
                name={this.state.profileName}
                email={this.state.profileEmail}
                photoURL={this.state.profilePhotoURL}
              />
              {this.navigationBar()}
            </div>
          );
        case "/":
          return (
            <div>
              <Dashboard userId={this.state.userId} />
              {this.navigationBar()}
            </div>
          );
        default:
          return (
            <div>
              <Dashboard userId={this.state.userId} />
              {this.navigationBar()}
            </div>
          );
      }
    } else if (
      localStorage.getItem("signedIn") === "false" &&
      this.state.isSignedIn
    ) {
      this.urlRedirect(HOST_NAME);
    } else {
      if (localStorage.getItem("signedIn") !== "true") {
        return (
          <div>
            <div id="loginButton" style={{ display: "none" }}>
              Login with Google
            </div>
            <SignUp />
          </div>
        );
      } else {
        return <div />;
      }
    }
  }

  render() {
    return <div>{this.loginStatus()}</div>;
  }
}

export default Auth;
