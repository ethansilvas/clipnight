import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from '../dashboard/Dashboard';
import Themes from '../themes/Themes';

const DisplayPage = () => (
    <Router>
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/themes" component={Themes} />
        </div>
    </Router>
);

export default DisplayPage;