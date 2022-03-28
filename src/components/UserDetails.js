import React, { Component } from 'react';

class UserDetails extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.logins)    
    }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default UserDetails;
