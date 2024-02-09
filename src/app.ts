import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import notFound from './app/middlewares/notFound'
import cookieParser from 'cookie-parser'

const app: Application = express()

//parsers

app.use(express.json())
app.use(express.text())
app.use(cookieParser())
app.use(cors()) // Use the 'cors' middleware

//application routes
app.use('/api/v1', router)
app.use(globalErrorHandler)

app.use(notFound)

export default app
