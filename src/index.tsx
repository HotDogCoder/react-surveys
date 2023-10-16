import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { CategoryScale, LinearScale, Chart, BarElement, LineElement, PointElement } from 'chart.js';

Chart.register(CategoryScale,LinearScale, BarElement, LineElement, PointElement);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);