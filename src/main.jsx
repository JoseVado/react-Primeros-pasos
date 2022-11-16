import React from 'react'
import ReactDOM from 'react-dom/client';


//import { HelloWorld } from './HelloWorld'
import { FirstApp } from './FirstApp';

import {CounterApp} from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={2} />
    {/*<FirstApp title='Hola, soy Vegeta' />*/}
  </React.StrictMode>
);