import { createReducer, createActions } from 'reduxsauce'

/* --- Types and Action Creators --- */
const { Types, Creators } = createActions({
  startProductsFetching: ['value'],
  getProducts: ['products'],
  getProductsSuccess: ['response'],
  failProductsResponse: ['error'],
  setMenu: ['menu']
})

export const productType = Types

export default Creators

/* --- Initial State --- */

const INITIAL_VALUES = {
  error: null,
  fetching: false,
  products: [],
  menu: 'All'
}

const initFetch = (state) => ({
  ...state,
  fetching: true
})

const setProducts = (state, action) => ({
  ...state,
  products: action.response
})

const failResponse = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error
})

const setMenu = (state, action) => {
  return ({
    ...state,
    menu: action.menu.categoryTitle
  })
}

const HANDLERS = {
  [Types.START_PRODUCTS_FETCHING]: initFetch,
  [Types.GET_PRODUCTS_SUCCESS]: setProducts,
  [Types.FAIL_PRODUCTS_RESPONSE]: failResponse,
  [Types.SET_MENU]: setMenu
}

/* --- Hookup Reducers To Types --- */

export const reducer = createReducer(INITIAL_VALUES, HANDLERS)
