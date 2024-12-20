import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';

import HomePage from './pages/HomePage';

import './index.css';

const router = createBrowserRouter([]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>,
);