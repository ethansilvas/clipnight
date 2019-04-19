import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from '../dashboard/Dashboard';
import Themes from '../themes/Themes';
import Clip from '../clip/Clip';

const DisplayPage = () => (
    <Router>
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/themes" component={Themes} />
            <Route path="/clip" component={Clip} />
        </div>
    </Router>
);

export default DisplayPage;