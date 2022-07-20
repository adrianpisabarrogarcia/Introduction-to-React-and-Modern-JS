import React from 'react'
import ReactDOM from 'react-dom/client'

//import App from './HelloWorldApp'
import { App } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import { SecondApp } from './SecondApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <App />
        <FirstApp />
        <SecondApp subtitle="Hola, Amaia!!" passNumber={ 1 + 3 }/>
    </React.StrictMode>
)

