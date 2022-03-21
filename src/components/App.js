import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import axios from 'axios'
import Search from './Search';

export class App extends Component {
    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.state = {
            loading: false,
            users: []
        }
    }
 

    searchUsers(keyword) {
        this.setState({loading: true});
        
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users?q=${keyword}`)
                .then(res => this.setState({users: res.data, loading: false}));
        }, 3000);
        
    }
    

    render() {
        return (
            <>
                <Navbar />
                <Search searchUsers={this.searchUsers} />
                <Users users={this.state.users} loading={this.state.loading}/>
            </>
        )
    }
}

export default App
