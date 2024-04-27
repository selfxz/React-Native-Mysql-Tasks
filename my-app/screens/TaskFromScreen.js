import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import { getTask, saveTask, updateTask } from '../Api'

const TaskFromScreen = ({ navigation, route }) => {
  const [tasks, setTasks] = useState({
    title: '',
    description: ''
  })
  const [editing, setEditing] = useState(false)

  const handleChange = (name, value) => setTasks({ ...tasks, [name]: value })

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(tasks)
      } else {
        await updateTask(route.params.id, tasks)
      }
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: 'Update a Task' })
      setEditing(true);

      (async () => {
        const task = await getTask(route.params.id)
        setTasks({ title: task.title, description: task.description })
      })()
    }
  }, [])

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder='Write a Title'
        placeholderTextColor='#ffffff'
        onChangeText={(text) => handleChange('title', text)}
        value={tasks.title}
      />
      <TextInput
        style={styles.input}
        placeholder='White a Description'
        placeholderTextColor='#ffffff'
        onChangeText={(text) => handleChange('description', text)}
        value={tasks.description}
      />
      {!editing
        ? (
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save Task</Text>
          </TouchableOpacity>
          )
        : (
          <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Update Task</Text>
          </TouchableOpacity>
          )}

    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#7c7c7c',
    borderRadius: 6,
    padding: 4,
    color: '#ededed',
    textAlign: 'center',
    marginVertical: 10
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#10ac84',
    width: '90%',
    height: 50,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#7c7c7c',
    width: '90%'
  }
})

export default TaskFromScreen
