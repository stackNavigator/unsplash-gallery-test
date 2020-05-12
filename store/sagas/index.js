import { takeEvery } from 'redux-saga/effects'

import { GET_PHOTOS_LIST } from '../action-types'
import { getPhotosList } from './photos'

export default function* watchPhotos() {
  yield takeEvery(GET_PHOTOS_LIST, getPhotosList)
}