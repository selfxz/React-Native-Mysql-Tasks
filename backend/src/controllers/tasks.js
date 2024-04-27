import { connection } from '../database'
export const getTasks = async (req, res) => {
  const connect = await connection()
  const [rows] = await connect.query('SELECT * FROM tasks')
  res.json(rows)
}

export const getTask = async (req, res) => {
  const connect = await connection()
  const [rows] = await connect.query('SELECT * FROM tasks WHERE id = ?',
    [req.params.id])
  res.json(rows[0])
}
export const getTaskCount = async (req, res) => {
  const connect = await connection()
  const [rows] = await connect.query('SELECT COUNT(*) as count FROM tasks')
  res.json(rows[0].count)
}
export const createTask = async (req, res) => {
  const connect = await connection()
  const [result] = await connect.query('INSERT INTO tasks (title, description) VALUES (?, ?)',
    [req.body.title, req.body.description])
  res.json({ id: result.insertId, ...req.body })
}
export const updateTask = async (req, res) => {
  const connect = await connection()
  await connect.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?',
    [req.body.title, req.body.description, req.params.id])
  res.sendStatus(204)
}
export const deleteTask = async (req, res) => {
  const connect = await connection()
  await connect.query('DELETE FROM tasks WHERE id = ?',
    [req.params.id])
  res.sendStatus(204)
}
