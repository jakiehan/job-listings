import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
import { getStateLocalStorage, setStateLocalStorage } from './localStorage.js';
import throttle from 'lodash/throttle';

export const configureStore = () => {

  const persistedState = getStateLocalStorage();

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(throttle(() => {
    setStateLocalStorage({
      filters: store.getState().filters,
    })
  }, 1000))

  return store;
}