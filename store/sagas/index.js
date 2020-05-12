import { takeEvery } from 'redux-saga/effects'

import { GET_PHOTOS_LIST, GET_PHOTO } from '../action-types'
import { getPhotosList, getPhoto } from './photos'

export default function* watchPhotos() {
  yield takeEvery(GET_PHOTOS_LIST, getPhotosList)
  yield takeEvery(GET_PHOTO, getPhoto)
}