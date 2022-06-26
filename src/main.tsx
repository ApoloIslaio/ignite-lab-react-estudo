
import React from 'react'
import ReactDOM from 'react-dom/client' //adaptação react para web
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)






// createRoot -> pega o id root e mostra na tela(renderizar)
// createRoot vai mostrar em tela a nossa aplicação( <App /> ) dentro do id root 
