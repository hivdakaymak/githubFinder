import React, { Component } from "react";
import Loading from "./Loading  ";

class UserDetails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.logins);
  }
  render() {
    const { loading } = this.props;
    const { name, avatar_url, location, html_url, bio, blog } = this.props.user;
    if (loading) return <Loading />;
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={avatar_url} className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{name}</p>
                <p>{location}</p>
                <p>
                  {" "}
                  <a className="btn btn-block" href={html_url}>
                    Github Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                {
                  bio &&
                  <>
                  <h3>About</h3>
                  <p>{bio}</p>
                  </>

                }
                {
                  blog &&
                  <>
                  <h3>Blog</h3>
                  <p>{blog}</p>
                  </>

                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
