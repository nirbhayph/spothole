// used in the profile screen. displays the score for the
// user with an associated image.
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  card: {
    width: "100%",
    maxWidth: 500,
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    overflow: "initial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 8,
    background: "linear-gradient(to right bottom, #1769aa, #33eaff)",
    [breakpoints.up("sm")]: {
      textAlign: "left",
      flexDirection: "row-reverse"
    }
  },
  media: {
    flexShrink: 0,
    width: "50%",
    paddingTop: "34%",
    marginLeft: "auto",
    marginRight: "auto",
    [breakpoints.up("sm")]: {
      marginRight: "initial"
    }
  },
  media2: {
    flexShrink: 0,
    width: "30%",
    paddingTop: "35%",
    marginLeft: "auto",
    marginRight: "auto",
    [breakpoints.up("sm")]: {
      marginRight: "initial"
    }
  },
  overline: {
    lineHeight: 2,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "0.625rem",
    opacity: 0.7
  },
  heading: {
    fontWeight: "600",
    color: "#ffffff",
    letterSpacing: 0.3
  },
  button: {
    fontWeight: "bold !important",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 100,
    paddingLeft: 32,
    paddingRight: 32,
    color: "#ffffff",
    textTransform: "none",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.32)"
    },
    [breakpoints.up("sm")]: {
      width: "auto"
    }
  }
}));

const RewardCard = props => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      {props.score > 0 && (
        <CardMedia
          className={styles.media}
          image={
            "https://webstockreview.net/images/good-clipart-well-done-2.png"
          }
        />
      )}
      {props.score === 0 && (
        <CardMedia
          className={styles.media2}
          image={
            "https://ignitewoo.com/wp-content/uploads/2012/08/woocommerce-loyalty-rewards.png"
          }
        />
      )}
      <CardContent className={styles.content}>
        <Typography className={styles.overline} variant={"overline"}>
          Every Detection Counts!
        </Typography>
        <Typography className={styles.heading} variant={"h6"} gutterBottom>
          Your Contribution Score
        </Typography>
        <Chip
          style={{
            fontWeight: "bold",
            backgroundImage:
              "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
          }}
          color="primary"
          icon={<LoyaltyIcon />}
          className={styles.button}
          label={props.score + " / 100"}
        />
      </CardContent>
    </Card>
  );
};

export default RewardCard;
