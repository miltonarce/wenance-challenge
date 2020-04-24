import {
  GET_PEOPLE_START,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_ERROR,
  DELETE_PEOPLE_START,
} from "./types";
import Api from "./../services/Services";

export const getPeopleStart = () => ({
  type: GET_PEOPLE_START
});

export const getPeopleSuccess = people => ({
  type: GET_PEOPLE_SUCCESS,
  payload: {
    people: people.results.map((p, i) => { return {...p, idPeople: i}})
  }
});

export const getPeopleError = message => ({
  type: GET_PEOPLE_ERROR,
  payload: {
    message
  }
});

export const deletePeople = people => ({
  type: DELETE_PEOPLE_START,
  payload: {
    id: people
  }
});

export const getPeople = () => async dispatch => {
  dispatch(getPeopleStart());
  try {
    const { data, status, statusText } = await Api.people.fetch();
    if (status === 200) {
      dispatch(getPeopleSuccess(data));
    } else {
      dispatch(getPeopleError(statusText));
    }
  } catch (error) {
    dispatch(getPeopleError("Something went wrong, please try again."));
  }
}