import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import HocCounter from './HocCounter';
// import Counter from './Counter';
// import CounterRender from './CounterRender';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// HOC
// const Enhanced = HocCounter(Counter);
// root.render(<Enhanced />)

// root.render(<CounterRender render={props => <Counter {...props}/>}/>)