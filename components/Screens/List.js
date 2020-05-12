import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

import ListImage from '../UI/ListImage'
import { LIST_ITEM_HEIGHT, MAIN_FONT_SIZE, SECONDARY_FONT_SIZE } from '../../store/constants'

const List = () => {
  const photos = useSelector(({ photos }) => photos)
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={photos}
      renderItem={({ item: { author, caption, thumbUrl, fullScreenUrl } }) => (
        <View style={styles.listItem}>
          <ListImage uri={thumbUrl} fullScreenUrl={fullScreenUrl} />
          <View style={styles.caption}>
            <Text style={styles.photoName}>{caption}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      )} />
  )
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    height: LIST_ITEM_HEIGHT
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbb'
  },
  caption: {
    flex: 1,
    margin: 10
  },
  photoName: {
    fontSize: MAIN_FONT_SIZE
  },
  author: {
    color: '#aaa',
    fontSize: SECONDARY_FONT_SIZE
  }
})

export default List