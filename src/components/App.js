import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import axios from 'axios'
import Search from './Search';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: []
        }
    }
    componentDidMount() {
        this.setState({loading: true});
        
        setTimeout(() => {
            axios
                .get('https://api.github.com/users')
                .then(res => this.setState({users: res.data, loading: false}));
        }, 3000);
        
    }
    render() {
        return (
            <>
                <Navbar />
                <Search />
                <Users users={this.state.users} loading={this.state.loading}/>
            </>
        )
    }
}

export default App
