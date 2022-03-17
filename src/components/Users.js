import React, { Component } from "react";
import User from "./user";
import Loading from "./Loading";

export class users extends Component {
  render() {
    if (this.props.loading) {
      return <loading />;
    } else {
      return (
        <div className="container mt-3">
          <div className="row">
            {this.state.users.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default users;
