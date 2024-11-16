// third-party
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector, TypedUseSelectorHook } from 'react-redux';
import { createLogger } from 'redux-logger';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

// project import
import reducers from './reducers';
import { createReducer } from 'newStore/reducers';
const IS_PRODUCTION = process.env.NODE_ENV !== 'development';
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;
let middlewares = [sagaMiddleware];
if (IS_PRODUCTION) {
  middlewares = [...middlewares];
}
const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga
  })
];
const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ["meta.arg", "payload.callback", "payload.data"]
      }
    })
      .concat(
        createLogger({
          collapsed: true,
          duration: true,
          timestamp: true
        })
      )
      .concat(middlewares),
  devTools:
    /* istanbul ignore next line */
    IS_PRODUCTION || process.env.PUBLIC_URL.length > 0,
  enhancers
});

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;

const persister = persistStore(store);

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, persister, useSelector, useDispatch };
