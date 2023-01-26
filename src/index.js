import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Hello />);
// let helloDiv = document.createElement('div');
// helloDiv.innerHTML = 'Hello from Javascript!';
// document.body.append(helloDiv);

// const sayHelloManyTimes = times =>
//   new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

// helloDiv = document.createElement('div');
// helloDiv.innerHTML = sayHelloManyTimes(10).join('<br/>');
// document.body.append(helloDiv);
