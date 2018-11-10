import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({

})

export const contactType = Types

export default Creators

const INITIAL_VALUES = {
  error: null
}

// TODO: Handle errors in request to the server
