const initialState = {
  isFetching: false,
  list: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_PLAYERS_SUCCESS':
      // console.log(state)
      // console.log(action)
      return {
        ...state,
        isFetching: false,
        list: action.payload.data
      }
    case 'GET_PLAYERS_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.payload.data
      }
    default:
      return state
  }
}