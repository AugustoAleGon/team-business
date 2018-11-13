import { put, call } from 'redux-saga/effects'
import { getProducts as getProductsRequest } from '../Services'
import productAction from '../Redux/Reducers/product'

export function * getProducts (action) {
  yield put(productAction.startProductsFetching())
  const response = yield call(getProductsRequest)
  if (response.status === 200) {
    yield put(productAction.getProductsSuccess(response.data))
  } else {
    yield put(productAction.failProductsResponse(response.error))
  }
}
