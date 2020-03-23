// this is the my approvals screen. it uses the expandable card component
// to show the high level view of the reports. it also indicates the counter
// for the number of reports submitted.
import React from "react";
import ReportItemCard from "./../../components/expandable_card";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { GET_USER_REPORTS } from "./../../utility/constants.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardData: []
    };
  }

  componentDidMount() {
    axios
      .post(GET_USER_REPORTS, {
        data: {
          userId: this.props.userId
        }
      })
      .then(res => {
        this.setState({
          dashboardData: res["data"]
        });
      })
      .catch(error => {
        console.info("Unable to retrieve user report");
      });
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <div style={{ textAlign: "center", color: "#fff" }}>
          {" "}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#333",
              color: "#fff",
              paddingLeft: "60px",
              paddingRight: "60px",
              paddingTop: "5px",
              paddingBottom: "5px",
              fontWeight: "bold",
              fontSize: "20px",
              border: "2px solid #333",
              borderRadius: "5px"
            }}
          >
            Number of Reports &nbsp; [ {this.state.dashboardData.length} ]
          </div>
        </div>
        <br />
        <br />
        {this.state.dashboardData.length === 0 && (
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
              marginTop: "150px",
              color: "#333"
            }}
          >
            {" "}
            No Reports yet. <br /> Click the Floating Action Button <br /> to
            start Reporting now.
          </div>
        )}

        <Grid container spacing={3}>
          {this.state.dashboardData.map(value => (
            <Grid key={value.case_id} item xs={12}>
              <ReportItemCard
                imageURL={value.imageURL}
                dateTime={value.created_date}
                fullLocation={value.location}
                fullDescription={value.description}
                location={
                  value.location.length < 27
                    ? value.location
                    : value.location.substring(0, 26) + " ..."
                }
                description={
                  value.description.lenght < 150
                    ? value.description
                    : value.description.substring(0, 149) + " ..."
                }
                status={value.status}
                severity={value.severity}
                caseNumber={value.case_id}
                latitude={value.latitude}
                longitude={value.longitude}
              />
              <br />
              <br />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
