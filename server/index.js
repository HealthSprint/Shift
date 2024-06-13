import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import bodyParser from 'body-parser'
import cors from 'cors'



dotenv.config()

const app = express()

app.use(cors({
  origin:process.env.CLIENT_URL,
  credentials:true,
}))

app.use(
    express.json({
      limit: '150mb'
    })
  )
  
  app.use(
    express.urlencoded({
      extended: true,
      limit: '150mb'
    })
  )

app.use(bodyParser.json())

app.use('/auth', authRoutes)

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    // listen for requests
    const PORT=process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`connected to db & listening on port ${PORT}`);
    })
  })
  .catch((error) => {
    console.log(error)
  })