import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'

import ListImage from '../UI/ListImage'
import { LIST_ITEM_HEIGHT, MAIN_FONT_SIZE, SECONDARY_FONT_SIZE } from '../../store/constants'

const data = [
  {
    id: '1',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '2',
    name: 'Ipsum lorem',
    surname: 'Sit dolor',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '3',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '4',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '5',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '6',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '7',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '8',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '9',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  },
  {
    id: '10',
    name: 'Lorem ipsum',
    surname: 'Dolor sit',
    photoUrl: 'http://lorempixel.com/200/200'
  }
]

const List = () => (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={data}
      renderItem={({ item: { name, surname, photoUrl } }) => (
        <View style={styles.listItem}>
          <ListImage uri={photoUrl} />
          <View style={styles.caption}>
            <Text style={styles.photoName}>{name}</Text>
            <Text style={styles.author}>{surname}</Text>
          </View>
        </View>
      )} />
)

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