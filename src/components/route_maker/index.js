// this component is used to create the route based on the
// source and destination location enetered by the user. it
// displays the route with the marked potholes on the path
// which were approved by the authorities. it uses google's
// maps api to build the route and create custom markers for the
// approved potholes. also it determines if a pothole is assocaited
// with a path using the 'isLocationOnEdge' library function provided
// by google maps.
/*global google*/
import React from "react";
import axios from "axios";
import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from "react-google-maps";
import {
  GET_ALL_REPORTS,
  ROUTE_ICON_IMAGE_HIGH,
  ROUTE_ICON_IMAGE_MEDIUM,
  ROUTE_ICON_IMAGE_LOW,
  GOOGLE_MAPS_API_KEY,
} from "./../../utility/constants.js";

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      GOOGLE_MAPS_API_KEY +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
      infoIndex: null,
    }),
    {
      onToggleOpen: ({ isOpen, infoIndex }) => (index) => ({
        isOpen: !isOpen,
        infoIndex: index,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: new google.maps.LatLng(
            parseFloat(this.props.startLat),
            parseFloat(this.props.startLng)
          ),
          destination: new google.maps.LatLng(
            parseFloat(this.props.endLat),
            parseFloat(this.props.endLng)
          ),
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            let self = this;
            let selectedReports = [];
            axios.post(GET_ALL_REPORTS).then((res) => {
              res.data.forEach((item, i) => {
                if (
                  google.maps.geometry.poly.isLocationOnEdge(
                    new google.maps.LatLng(item.latitude, item.longitude),
                    new google.maps.Polyline({
                      path: result.routes[0].overview_path,
                    }),
                    0.001
                  )
                ) {
                  selectedReports.push(item);
                }
              });

              self.setState({
                directions: result,
                selectedReports: selectedReports,
              });
              this.props.manageCounts(
                selectedReports.length,
                result.routes[0].legs[0].duration.text +
                  " (" +
                  result.routes[0].legs[0].distance.text +
                  ")",
                7
              );
            });
          } else {
            console.info(`Error Fetching Directions`);
          }
        }
      );
    },
  })
)((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{
        lat: parseFloat(props.centerLat),
        lng: parseFloat(props.centerLng),
      }}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
      {props.selectedReports.map((report, index) => {
        let iconMarkerImage;
        if (parseInt(report.severity) <= 3) {
          iconMarkerImage = ROUTE_ICON_IMAGE_LOW;
        } else if (parseInt(report.severity) <= 6) {
          iconMarkerImage = ROUTE_ICON_IMAGE_MEDIUM;
        } else {
          iconMarkerImage = ROUTE_ICON_IMAGE_HIGH;
        }
        let iconMarker = new window.google.maps.MarkerImage(
          iconMarkerImage,
          null,
          null,
          null,
          new window.google.maps.Size(48, 48)
        );
        return (
          <Marker
            icon={iconMarker}
            key={index}
            position={{
              lat: parseFloat(report.latitude),
              lng: parseFloat(report.longitude),
            }}
            onClick={() => props.onToggleOpen(index)}
          >
            {props.isOpen && props.infoIndex === index && (
              <InfoWindow
                onCloseClick={props.onToggleOpen}
                key={index}
                visible={true}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3px",
                    marginRight: "3px",
                  }}
                >
                  <div
                    style={{
                      color: "#212121",
                      paddingRight: "10px",
                      paddingBottom: "10px",
                      fontWeight: "bold",
                      lineHeight: 1.5,
                    }}
                  >
                    Reported On: {report.created_date.split(" ")[0]}
                    <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
                    Current Status:{" "}
                    {report.status.charAt(0).toUpperCase() +
                      report.status.slice(1)}
                    <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
                    Reported Severity: {report.severity}/10{" "}
                  </div>
                  <div>
                    <img
                      src={report.imageURL}
                      width="200px"
                      style={{
                        border: "2px solid black",
                        borderRadius: "10px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      alt={"Validated Pothole"}
                    />
                  </div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  );
});

export default MapWithADirectionsRenderer;
