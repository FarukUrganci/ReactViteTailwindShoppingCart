import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)
//* StrickMode: Projenin ilerleyen aşamalarında sıkıntı çıkabilir.Versiyon kontrolu sağlar,ilgili hataları bize söyler(console kısmında)
