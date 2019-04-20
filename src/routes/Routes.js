import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from '../dashboard/Dashboard';
import Themes from '../themes/Themes';
import Classic from '../themes/list/classic/Classic';
import Data from '../data/Data';

const DisplayPage = () => (
    <Router>
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/themes" component={Themes} />
            <Route path="/classic" component={Classic} />
            <Route path="/data" component={Data} />
        </div>
    </Router>
);

export default DisplayPage;