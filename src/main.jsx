import React from 'react'
import ReactDOM from 'react-dom/client';

{
  /*import { HelloWorld } from './HelloWorld'
import { FirstApp } from './FirstApp';*/
}

import {CounterApp} from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<HelloWorld />*/}
    {/*title="hola goku" subTitle={123}*/}
        {/*<FirstApp title="Hola soy goku" subTitle={123} />*/}
    <CounterApp value={2} />
  </React.StrictMode>
);