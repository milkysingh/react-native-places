import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = placeName => {
  console.log(placeName);
  return {
    type: ADD_PLACE,
    placeName
  };
};
export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};
