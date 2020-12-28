import { API_REQUEST, API_SUCCESS, API_FAILED } from '../actions'

const initialState = {
  isLoading: true, 
  isError: false,
  data: [],
  userName: ''
}

 export default function reducer(state = initialState, action) {
  switch (action.type) {
    case API_REQUEST: 
      return {
        ...state, 
        isLoading: true, 
        isError: false,
      }
    case API_SUCCESS: 
      const { data, userName } = action.payload
      return {
        ...state, 
        isLoading: false, 
        isError: false,
        data: data,
        userName
      }
    case API_FAILED: 
      return {
        ...state, 
        isLoading: false, 
        isError: true,
        data: [],
        userName: ""
      }
    default:
      return state
  }
}