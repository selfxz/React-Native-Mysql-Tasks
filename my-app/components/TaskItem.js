import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TaskItem = ({ task, handleDelete }) => {
  const navegation = useNavigation()
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navegation.navigate('TaskFromScreen', { id: task.id })}
      >
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemDescription}>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#ee5253',
          padding: 10,
          borderRadius: 10
        }}
        onPress={() => handleDelete(task.id)}
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 800
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 18
  },
  itemDescription: {
    color: '#ffffff',
    fontSize: 14
  }
})

export default TaskItem
