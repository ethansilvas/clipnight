import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Themes extends Component {
    render() {
        return(
            <div className="top">
                <Link to="/classic" className="classicLink">
                    Classic
                </Link>
            </div>
        );
    }
}

export default Themes;