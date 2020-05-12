import { REQUEST_START, REQUEST_FAIL, REQUEST_SUCCESS } from '../action-types'

const initState = {
  error: null,
  loading: false,
  photos: null
}

export default (state = initState, { type, ...payload }) => {
  switch (type) {
    case REQUEST_START:
      return { ...state, loading: true, employees: null }
    case REQUEST_SUCCESS:
      return { ...state, loading: false, ...payload }
    case REQUEST_FAIL:
      const { error } = payload
      return { ...state, loading: false, error }
    default:
      return state
  }
}