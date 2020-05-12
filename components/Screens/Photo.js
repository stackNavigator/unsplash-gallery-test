import React from 'react'
import { StyleSheet, SafeAreaView, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { FULLSCREEN_WIDTH, FULLSCREEN_HEIGHT } from '../../store/constants'

const Photo = () => {
  const { params: { uri } } = useRoute()
  return (
    < SafeAreaView >
      <Image
        style={styles.fullScreenImage}
        source={{ uri }} />
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  fullScreenImage: {
    width: FULLSCREEN_WIDTH,
    height: FULLSCREEN_HEIGHT,
    resizeMode: "stretch"
  }
})

export default Photo