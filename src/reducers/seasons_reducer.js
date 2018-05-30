const initialState = {
  isFetching: false,
  list: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_SEASONS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        list: action.payload.data
      }
    case 'GET_SEASONS_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.payload.data
      }
    default:
      return state
  }
}