import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import TaskFromScreen from './screens/TaskFromScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Tasks App',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#ffffff' },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskFromScreen')}
              >
                <Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>New</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name='TaskFromScreen'
          component={TaskFromScreen}
          options={({ navigation }) => ({
            title: 'Create New Task',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#ffffff' },
            headerTintColor: '#ffffff',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
              >
                <Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>Cancel</Text>
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
