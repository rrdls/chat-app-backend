import { MongoHelper } from '../infrastructure/database'
import { env } from '../main/config'
import app from './config/app'
const mongoHelper = new MongoHelper(env.mongoUrl)

mongoHelper
  .connect()
  .then(async () => {
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`)
    )
  })
  .catch(console.error)
