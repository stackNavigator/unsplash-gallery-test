import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import List from './components/List'
import Photo from './components/Photo'

const Stack = createStackNavigator()

const App = () => {
  const routes = (
    <>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Photo" component={Photo} />
    </>
  )
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          {routes}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App