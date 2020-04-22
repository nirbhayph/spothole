// this component is used for the following functions:
// 1]. this is an autoComplete service for searching locations and
// acquiring LatLng of selected locations. contains functionality to build
// the autoComplete search suggestion options. includes styling for the same.
// 2]. this uses the google maps API and the geocoder API.
// 3]. it also gives the option to use current location (optional props)
// 4]. it is used in the new report section and the route navigation section.
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
import axios from "axios";
import { Chip } from "@material-ui/core";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import { GOOGLE_MAPS_API_KEY } from "./../../utility/constants.js";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  textInput: {
    marginBottom: "10px",
  },
  labelText: {
    marginTop: "25px",
    marginBottom: "10px",
  },
  buttonCurrentLocation: {
    marginBottom: "15px",
  },
}));

export default function LocationSearchInput(props) {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [errorRequired, updateRequired] = React.useState(false);
  const [currentLocation] = React.useState("");
  const [currentLatLngValue] = React.useState("");

  const loaded = React.useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=" +
          GOOGLE_MAPS_API_KEY +
          "&libraries=places",
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      updateRequired(false);
    } else {
      updateRequired(true);
    }
    console.info("The field is now required", errorRequired);

    if (event.target.value.trim() === "") {
      if (props.currentLocationOptional === undefined) {
        props.updateLocation(currentLocation);
      }
    }
  };

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  const handleAutoChange = (event, value) => {
    try {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?place_id=" +
            value.place_id +
            "&key=" +
            GOOGLE_MAPS_API_KEY
        )
        .then((res) => {
          props.updateLocation(
            value.description,
            res["data"]["results"][0]["geometry"]["location"]
          );
        });
    } catch {
      props.updateLocation(currentLocation, currentLatLngValue);
    }
  };

  return (
    <div>
      <Typography gutterBottom className={classes.labelText}>
        {props.label || "Tag Pothole's Location"}
      </Typography>
      <Autocomplete
        id="google-map-demo"
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.description
        }
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        disableOpenOnFocus
        fullWidth
        onChange={handleAutoChange}
        renderInput={(params) => (
          <TextField
            {...params}
            //required
            //errorRequired
            label="Add a location"
            variant="outlined"
            fullWidth
            className={classes.textInput}
            onChange={handleChange}
          />
        )}
        renderOption={(option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length])
          );

          return (
            <Grid container alignItems="center">
              <Grid item>
                <LocationOnIcon className={classes.icon} />
              </Grid>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                  >
                    {part.text}
                  </span>
                ))}

                <Typography variant="body2" color="textSecondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          );
        }}
      />
      {props.currentLocationOptional === undefined && (
        <div>
          {" "}
          <h5
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            OR
          </h5>
          <div style={{ textAlign: "center" }}>
            <i>(Will Use Current Location Instead)</i>
          </div>
          <div style={{ textAlign: "center" }}>
            <Chip
              style={{ marginBottom: "25px", marginTop: "7px" }}
              icon={<AddLocationIcon />}
              label={props.permissionLocationValue}
              variant="outlined"
              color="primary"
            />
          </div>{" "}
        </div>
      )}
    </div>
  );
}
