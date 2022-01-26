import React from 'react'
import ReactDOM from 'react-dom'
import dayjs from 'dayjs'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'dayjs/locale/ko'
import '@/styles/styles.scss'

// dayjs (set locale to korean)
dayjs.locale('ko')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
