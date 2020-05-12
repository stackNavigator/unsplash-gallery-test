import React from 'react'
import { StyleSheet, SafeAreaView, Image } from 'react-native'

import { FULLSCREEN_WIDTH, FULLSCREEN_HEIGHT } from '../../store/constants'

const Photo = () => (
  <SafeAreaView>
    <Image
      style={styles.fullScreenImage}
      source={{ uri: 'http://lorempixel.com/500/500' }} />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  fullScreenImage: {
    width: FULLSCREEN_WIDTH,
    height: FULLSCREEN_HEIGHT,
    resizeMode: "stretch"
  }
})

export default Photo