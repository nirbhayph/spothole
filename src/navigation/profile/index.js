// this is the profile screen. it displys the main email photo URL for the
// signed in user and also shows the overall contribution score for the user
// in terms of number of submissions, approvals and completions.
// has separate indicators for the same.
import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import RewardCard from "./../../components/rewards_card";
import axios from "axios";
import { GET_USER_REPORTS } from "./../../utility/constants.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedCount: 0,
      approvedCount: 0,
      completedCount: 0,
      score: 0
    };
    axios
      .post(GET_USER_REPORTS, {
        data: {
          userId: this.props.userId
        }
      })
      .then(res => {
        let completedCount = res.data.filter(report => {
          return report.status === "completed";
        }).length;
        let approvedCount =
          res.data.filter(report => {
            return report.status === "approved";
          }).length + completedCount;
        let submittedCount =
          res.data.filter(report => {
            return report.status === "submitted";
          }).length + approvedCount;

        let score = Math.ceil(
          (parseFloat(approvedCount / submittedCount) * 0.7 +
            parseFloat(completedCount / approvedCount) * 0.3) *
            100
        );
        this.setState({
          submittedCount: submittedCount,
          approvedCount: approvedCount,
          completedCount: completedCount,
          score: score || 0
        });
      });
  }
  render() {
    return (
      <div>
        <center>
          <Card
            style={{
              marginTop: "125px",
              borderRadius: 12,
              minWidth: 256,
              maxWidth: 500,
              textAlign: "center",
              marginLeft: "50px",
              marginRight: "50px"
            }}
          >
            <CardContent>
              <Avatar
                style={{
                  width: 120,
                  height: 120,
                  margin: "auto",
                  marginTop: "15px",
                  marginBottom: "15px"
                }}
                src={this.props.photoURL}
              />
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  letterSpacing: "0.5px",
                  marginTop: 8,
                  marginBottom: 0
                }}
              >
                {this.props.name}
              </h3>
              <span
                style={{
                  fontSize: 14,
                  color: "#9e9e9e",
                  marginBottom: "1em"
                }}
              >
                <a href={"mailto:" + this.props.email}>{this.props.email}</a>
              </span>
            </CardContent>
            <Divider variant="middle" />
            <Box display={"flex"}>
              <Box p={2} flex={"auto"}>
                <p
                  style={{
                    fontSize: 12,
                    color: "#9e9e9e",
                    fontWeight: 500,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    margin: 0
                  }}
                >
                  Submitted
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 4,
                    letterSpacing: "1px"
                  }}
                >
                  {this.state.submittedCount}
                </p>
              </Box>
              <Box p={2} flex={"auto"}>
                <p
                  style={{
                    fontSize: 12,
                    color: "#9e9e9e",
                    fontWeight: 500,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    margin: 0
                  }}
                >
                  Approved
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 4,
                    letterSpacing: "1px"
                  }}
                >
                  {this.state.approvedCount}
                </p>
              </Box>
              <Box p={2} flex={"auto"}>
                <p
                  style={{
                    fontSize: 12,
                    color: "#9e9e9e",
                    fontWeight: 500,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    margin: 0
                  }}
                >
                  Completed
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 4,
                    letterSpacing: "1px"
                  }}
                >
                  {this.state.completedCount}
                </p>
              </Box>
            </Box>
            <div
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "20px"
              }}
            >
              <center>
                <RewardCard score={this.state.score} />
              </center>
              <br />
            </div>
          </Card>
        </center>
      </div>
    );
  }
}

export default Profile;
