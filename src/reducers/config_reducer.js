const initialState = {
  region: localStorage.getItem('region') || 'pc-eu'
}


export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CONFIG':
      return {
        ...state
      }
    case 'SET_REGION':
      localStorage.setItem('region', action.payload)
      return{
        ...state,
        region: action.payload
      }
    default:
      return state
  }
}