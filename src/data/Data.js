import React, { Component } from 'react';
import Fetch from 'react-fetch'

class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            username: []
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/listparts')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        username: result[0]
                    });
                    console.log(result);
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )  
    }

    render() {
        const { error, isLoaded, username } = this.state;
        if (error) {
            console.log(username)
            return <div> Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>; 
        } else {
            return (
                <ul>
                    {username.map(item => (
                        <li key={item.name}>
                        {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default Data;