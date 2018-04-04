import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
import selectedImage from '../../../assests/desktop-year-of-the-tiger-images-wallpaper.jpg';
const initialState = {
  places: [],
  selectedSinglePlace: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: selectedImage
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place, i) => {
          return place.key !== state.selectedSinglePlace.key;
        }),
        selectedSinglePlace: null
      };

    default:
      return state;
  }
};
