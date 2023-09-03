import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

let rootNode = document.getElementById('root');

if(rootNode != null) {
ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>);
}