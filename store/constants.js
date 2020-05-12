import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const FULLSCREEN_WIDTH = width
export const FULLSCREEN_HEIGHT = height
export const LIST_ITEM_HEIGHT = height / 7.5
export const MAIN_FONT_SIZE = width / 20
export const SECONDARY_FONT_SIZE = width / 30
export const THUMBNAIL_DIMENSION = height / 10