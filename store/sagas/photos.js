import { put } from 'redux-saga/effects'

import { REQUEST_START, REQUEST_FAIL, REQUEST_SUCCESS } from '../action-types'

import clientId from '../client-id'

export function* getPhotosList() {
  yield put({ type: REQUEST_START })
  const response = yield fetch(`https://api.unsplash.com/photos`, {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${clientId}`
    }
  })
  const { status } = response
  console.log(status)
}

export function* getPhoto() {
  yield put({ type: REQUEST_START })
}