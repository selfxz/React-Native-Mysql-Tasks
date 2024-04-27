import { FlatList, RefreshControl } from 'react-native'
import TaskItem from './TaskItem'
import React, { useState, useEffect } from 'react'
import { getTasks, deleteTask } from '../Api'
import { useIsFocused } from '@react-navigation/native'

const TaskList = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [tasks, setTasks] = useState([])
  const isFocused = useIsFocused()
  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  useEffect(() => {
    loadTasks()
  }, [isFocused])

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />
  }

  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTasks()
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTasks()
    setRefreshing(false)
  })

  return (
    <FlatList
      style={{ width: '100%' }}
      data={tasks}
      keyExtractor={(item) => item.id + ''} // extrae el id y lo convierte en string
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={['#ffffff']}
          progressBackgroundColor='#000'
          onRefresh={onRefresh}
        />
      }
    />
  )
}

export default TaskList
