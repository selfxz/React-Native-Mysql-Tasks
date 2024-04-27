import mysql from 'mysql2/promise'
import { config } from './config'

export const connection = async () => {
  return await mysql.createConnection(config)
}
