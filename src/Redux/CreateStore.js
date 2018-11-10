import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { reducer as product } from './Reducers/product'
import root from '../Sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const configureStore = preloadedState => {
  const compose = composeWithDevTools(applyMiddleware(...middleware))
  const store = createStore(product, preloadedState, compose)
  sagaMiddleware.run(root)
  return store
}

export default configureStore
