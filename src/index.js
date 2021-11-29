import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import ScrollToTop from 'react-router-scroll-top'

import store from './app/store'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Provider>
  </Router>,
  document.getElementById('root')
)
