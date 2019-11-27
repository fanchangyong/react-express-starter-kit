import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const middlewares = [sagaMiddleware];
  const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares)));
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
