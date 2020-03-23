// the main sign in screen for the application. uses unsplash api
// to load random background images and uses the google OAuth signin api.
import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PinDropIcon from "@material-ui/icons/PinDrop";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random?road)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    marginTop: "50px",
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: "50px",
    maxWidth: "250px",
    paddingTop: "15px",
    paddingBottom: "15px"
  }
}));

export default function SignInSide(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543839482-a95d35fc5a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80'), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",
          backgroundBlendMode: "overlay",
          borderLeft: "5px SOLID #212121"
        }}
      >
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h1"
            style={{ marginTop: "100px" }}
          >
            <b>
              <PinDropIcon fontSize={"inherit"} />
            </b>
          </Typography>
          <br />
          <Typography component="h1" variant="h3">
            <b>Spothole</b>
          </Typography>
          <br />
          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: "100px" }}
          >
            <b>Sign In</b>
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>
              document.getElementsByClassName("abcRioButton")[0].click()
            }
          >
            <b>
              Sign In With Google &nbsp;
              <LockOpenIcon />
            </b>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
