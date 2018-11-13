import { takeLatest } from 'redux-saga/effects'

import { productTypes } from '../Redux/Reducers/product'
import { getProducts } from './productSaga'

export default function * root () {
  yield [
    takeLatest(productTypes.GET_PRODUCTS, getProducts)
  ]
}
