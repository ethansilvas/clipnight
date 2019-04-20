import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return(
            <div className="menu">
                <Link to="/themes" className="themesLink">
                    Themes
                </Link>
            </div>
        );
    }
}

export default Dashboard;