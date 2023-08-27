import express from 'express'
import connectDB from './Config/db.js'
import dotenv from 'dotenv'
import productRoute from './Routes/productRoutes.js'
import { errorHandler, notFound } from './Middelware/errorMiddelware.js'

dotenv.config()

connectDB() //mongoDB Connection

const port = process.env.PORT || 5000

const app = express()

app.use('/api/products', productRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`server is running at port ${port}`))