import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import RootContainer from './Containers/RootContainer'
import configureStore from './Redux/CreateStore'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

ReactDOM.render(<RootContainer store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
