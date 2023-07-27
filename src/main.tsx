import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/reset.css';
import { StyleProvider } from '@ant-design/cssinjs';

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
     <App />
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
