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
  if (status === 200) {
    const jsonResponse = yield response.json()
    const photos = jsonResponse.map(({ id, alt_description, urls: { thumb, regular },
      user: { name } }) => ({
        id,
        caption: alt_description,
        thumbUrl: thumb,
        fullScreenUrl: regular,
        author: name
      }))
    return yield put({ type: REQUEST_SUCCESS, photos })
  }
  const jsonResponse = JSON.stringify((yield response.json()).errors)
  return yield put({ type: REQUEST_FAIL, error: jsonResponse })
}

export function* getPhoto() {
  yield put({ type: REQUEST_START })
}