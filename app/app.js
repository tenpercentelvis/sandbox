import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'babel-polyfill';

import './styles/styles.css';

import Routes from './routes/Routes';
import { Navigation } from './components';

const App = () => {
    return (
        <div style={{ padding: '100px' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gridGap: '40px',
                }}
            >
                <div>
                    <Navigation />
                </div>
                <div style={{ padding: '10px' }}>
                    <Routes />
                </div>
            </div>
        </div>
    );
};

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app'),
);
