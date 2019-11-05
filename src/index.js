import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// #region import components
import Header from './components/Header';
import { Auth } from './components/Auth';
import Footer from './components/Footer';
// #endregion import components
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div className="App">
        <Header />
        <CssBaseline />
        <Container fixed>
            <Auth />
        </Container>
        <Footer />
    </div>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
