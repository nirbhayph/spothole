// this is the routing screen.
// has options to enter source and destination location which uses the autocomplete search.
// it also contains the counter indicators component and MapWithADirectionsRenderer component
import React from "react";
import MapWithADirectionsRenderer from "./../../components/route_maker";
import Button from "@material-ui/core/Button";
import LocationSearchInput from "./../../components/search_places";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import CounterIndicator from "./../../components/counter_indicator";

const useStyles = theme => ({
  root: {
    maxWidth: "100%",
    marginRight: "2%",
    marginLeft: "2%",
    marginTop: "100px",
    marginBottom: "30px"
  },
  buttonSubmit: {
    marginTop: "7px"
  },
  map: {
    border: "2px SOLID white",
    borderRadius: "5px"
  }
});

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerLat: "",
      centerLng: "",
      startLat: "",
      startLng: "",
      endLat: "",
      endLng: "",
      startAddress: "",
      endAddress: "",
      selectedReports: [],
      map: "",
      counterIndicators: ""
    };
  }

  setSourceLocation = (location, latLngLocation) => {
    this.setState({
      startAddress: location,
      startLat: latLngLocation.lat,
      startLng: latLngLocation.lng
    });
  };

  setDestinationLocation = (location, latLngLocation) => {
    this.setState({
      endAddress: location,
      endLat: latLngLocation.lat,
      endLng: latLngLocation.lng
    });
  };

  manageCounts = (totalCount, eta, severity) => {
    this.setState({
      counterIndicators: (
        <CounterIndicator
          totalCount={totalCount}
          eta={eta}
          lowSeverity={7}
          mediumSeverity={8}
          highSeverity={10}
        />
      )
    });
  };

  submitOrignDestination = () => {
    this.setState(
      {
        map: "Loading ... "
      },
      () => {
        if (
          !(
            this.state.startLat === "" ||
            this.state.startLng === "" ||
            this.state.endLat === "" ||
            this.state.endLng === ""
          )
        ) {
          this.setState({
            map: (
              <div
                style={{
                  border: "2px SOLID white",
                  borderRadius: "5px",
                  marginTop: "15px"
                }}
              >
                <MapWithADirectionsRenderer
                  manageCounts={this.manageCounts}
                  centerLat={"-34.397"}
                  centerLng={"150.644"}
                  startLat={this.state.startLat}
                  startLng={this.state.startLng}
                  endLat={this.state.endLat}
                  endLng={this.state.endLng}
                  selectedReports={this.state.selectedReports}
                  directions
                />
              </div>
            )
          });
        } else {
          this.setState({
            map: (
              <div>
                <br />
                <Alert variant="filled" severity="info">
                  This is an error alert — Cannot make map, try again!
                </Alert>
              </div>
            )
          });
        }
      }
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Route It
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Use this to plan your travel, see the route to your destination and
            how severe it could be to travel. Also, monitor any route to see the
            progress for the reported pothole(s).
          </Typography>
          <LocationSearchInput
            label="Source Location"
            updateLocation={this.setSourceLocation}
            currentLocationOptional={true}
          />
          <LocationSearchInput
            label="Destination Location"
            updateLocation={this.setDestinationLocation}
            currentLocationOptional={true}
          />
          <Button
            size="large"
            color="primary"
            onClick={() => this.submitOrignDestination()}
            className={classes.buttonSubmit}
          >
            Get Route
          </Button>
          {this.state.counterIndicators}
          {this.state.map}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(Routing);
