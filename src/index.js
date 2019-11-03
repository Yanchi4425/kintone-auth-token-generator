import React from 'react';
import ReactDOM from 'react-dom';
// #region import components
import Header from './components/Header';
import { Auth } from './components/Auth';
import Footer from './components/Footer';
// #endregion import components
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div className="App">
        <Header />
        <Auth />
        <Footer />
    </div>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
