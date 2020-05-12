import React, { useRef } from 'react'
import { StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { THUMBNAIL_DIMENSION } from '../../store/constants'

const shrinkedScale = 0.8
const normalScale = 1
const animationDuration = 100

const ListImage = ({ uri }) => {
  const scale = useRef(new Animated.Value(normalScale)).current
  const animateScale = toValue => Animated.timing(scale, {
    toValue,
    duration: animationDuration,
    useNativeDriver: true
  })
  const { navigate } = useNavigation()
  return (
    <TouchableOpacity
      style={{ transform: [{ scaleX: scale }, { scaleY: scale }] }}
      onPressIn={() => animateScale(shrinkedScale).start()}
      onPressOut={() => animateScale(normalScale).start()}
      onPress={() => navigate('Photo')}>
      <Image
        style={styles.image}
        source={{ uri }} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    height: THUMBNAIL_DIMENSION,
    width: THUMBNAIL_DIMENSION,
    borderRadius: THUMBNAIL_DIMENSION / 2
  }
})

export default ListImage