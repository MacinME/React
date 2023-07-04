import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
// import { App } from './App';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode >
        <CounterApp value={ 10 } />
        {/* <FirstApp title='There is nothing' total={ 24 }/> */}
    </React.StrictMode>
)