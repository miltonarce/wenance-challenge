import {
  GET_PEOPLE_START,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_ERROR,
  DELETE_PEOPLE_START,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  message: ""
}

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_PEOPLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.people
       }
    }
    case GET_PEOPLE_ERROR: {
      return {
        ...state,
        loading: false,
        message: action.payload.message
       }
    }
    case DELETE_PEOPLE_START: {
      return {
        ...state,
        data: state.data.filter( i => i.idPeople !== action.payload.id)
      }
    }
    default:
      return state;
  }
}

export default peopleReducer;