import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from './Auth';


export default function Main(props) {
    return (
        <article>
            <Router basename="/kintone-auth-token-generator/">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">TOP</Link>
                        </li>
                        <li>
                            <Link to="/Auth">認証トークン</Link>
                        </li>
                        <li>
                            <Link to="/BasicAuth">Basic認証トークン</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/"></Route>
                    <Route exact path="/Auth">
                        <Auth 
                            type={"auth"}
                            state={props.state} 
                            changeType={props.changeType}
                            changeId={props.changeId}
                            changePassword={props.changePassword}
                            generateToken={props.generateToken}
                            copyText={props.copyText} 
                        />
                    </Route>
                    <Route path="/BasicAuth">
                        <Auth 
                            type={"basic"}
                            state={props.state} 
                            changeType={props.changeType}
                            changeId={props.changeId}
                            changePassword={props.changePassword}
                            generateToken={props.generateToken}
                            copyText={props.copyText} 
                        />

                    </Route>
                </Switch>
            </Router>
        </article>
    );

}