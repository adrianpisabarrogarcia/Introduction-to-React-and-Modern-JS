import React from 'react'
import ReactDOM from 'react-dom/client'

//import App from './HelloWorldApp'
import { App } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import { SecondApp } from './SecondApp'
import ThirdApp from './ThirdApp'
import { CounterApp } from './CounterApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <App />
        <FirstApp />
        <SecondApp subtitle='Hola, Amaia!!' passNumber={ 1 + 3 }/>
        <ThirdApp subtitle="Hola, Amaia!!"/>
        <hr></hr>
        <CounterApp value={ 2 + 2} />

    </React.StrictMode>
)

