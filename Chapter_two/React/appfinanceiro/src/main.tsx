import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer } from 'miragejs'
import { App } from './App'



createServer({
  routes() {
    this.namespace = '/api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 200.000,
          type: 'deposit',
          category: 'Investimentos',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
