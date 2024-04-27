import { Router } from 'express'
import {
  createTask,
  deleteTask,
  getTask,
  getTaskCount,
  getTasks,
  updateTask
} from '../controllers/tasks'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The tasks managing API
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the tasks
 */

router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Get total task count
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Total Tasks
 */

router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks/:id:
 *   get:
 *     summary: Get a task by id
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Task by ID
 */

router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Post a new task
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Create Task
 */

router.post('/tasks', createTask)
/**
 * @swagger
 * /tasks/:id:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Delete Task
 */

router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks/:id:
 *   put:
 *     summary: Update a task
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Update Task
 */

router.put('/tasks/:id', updateTask)

export default router
