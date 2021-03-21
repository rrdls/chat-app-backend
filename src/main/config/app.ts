import { setupMiddlewares } from './setup-middlewares'
import { setupRoutes } from './setup-routes'
import express from 'express'
const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app
