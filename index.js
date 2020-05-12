import React from 'react'
import { AppRegistry } from 'react-native'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import photosReducer from './store/reducers/photos'
import watchPhotos from './store/sagas'
import App from './App'
import { name as appName } from './app.json'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(photosReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchPhotos)
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () => AppContainer)