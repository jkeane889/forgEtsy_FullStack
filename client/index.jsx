import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Gentium Basic:400,700', 'serif']
    }
});

ReactDOM.render(<App/>, document.getElementById('reviews'));