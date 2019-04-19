import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from '../dashboard/Dashboard';

const DisplayPage = () => (
    <Router>
        <div>
            <Route exact path="/" component={Dashboard} />
        </div>
    </Router>
);

export default DisplayPage;