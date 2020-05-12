import React, { useEffect } from 'react'
import { StyleSheet, View, StatusBar, ActivityIndicator, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'

import { GET_PHOTOS_LIST } from './store/action-types'
import List from './components/Screens/List'
import Photo from './components/Screens/Photo'

const Stack = createStackNavigator()

const App = () => {
  const loading = useSelector(({ loading }) => loading)
  const error = useSelector(({ error }) => error)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: GET_PHOTOS_LIST })
  }, [])
  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    )
  return (
    <SafeAreaProvider>
      {error && Alert.alert(error)}
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Photo" component={Photo} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App