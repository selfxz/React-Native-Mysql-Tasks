import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import tasksRoutes from './routes/tasks'
import { options } from './swaggerOptions'

const specs = swaggerJSDoc(options)

export const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(tasksRoutes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))
