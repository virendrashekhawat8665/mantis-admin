import { configureStore } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createReducer } from './reducers';
const IS_PRODUCTION = process.env.NODE_ENV !== 'development';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  let middlewares = [sagaMiddleware];

  // LOG ONLY IN DEVELOPMENT/STAGING PRODUCTION OPTIMIZATIONS
  if (IS_PRODUCTION) {
    middlewares = [...middlewares];
  }
  const enhancers = [
    createInjectorsEnhancer({
      //@ts-ignore
      createReducer,
      runSaga
    })
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['UserGroupState/doAddGroup'],
          // Ignore these field paths in all actions
          ignoredActionPaths: ['meta.arg', 'payload.callback', 'payload.data']
          // Ignore these paths in the state
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

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  //@ts-ignore
  if (module.hot) {
    //@ts-ignore
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return store;
}
