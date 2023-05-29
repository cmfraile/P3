import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.sass';
import { AppRouter } from './routes/app.routes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import '../node_modules/bootstrap/dist/js/bootstrap.min.js' ;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
)
