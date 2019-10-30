import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
            <ul>
                <li>
                    <Link to="/">TOP</Link>
                </li>
                <li>
                    <Link to="/Auth">Auth</Link>
                </li>
                <li>
                    <Link to="/BasicAuth">BasicAuth</Link>
                </li>
            </ul>
    );
}