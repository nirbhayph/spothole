import React from "react";
class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    window.location.href = "https://nirbhay.me/spothole/404";
    return <div>404</div>;
  }
}

export default NotFound;
