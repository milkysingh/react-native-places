import { createStore, combineReducers, compose } from 'redux';
import placeReducer from './reducers/places';
const rootReducer = combineReducers({
  places: placeReducer
});
let componseEnhancers = compose;
if (__DEV__) {
  componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const configureStore = () => createStore(rootReducer, componseEnhancers());
export default configureStore;
