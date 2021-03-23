import { Express } from 'express'
import messageRoutes from '../routes/message-routes'
import userRoutes from '../routes/user-routes'
export const setupRoutes = (app: Express): void => {
  app.use('/api/v1/', messageRoutes)
  app.use('/api/v1/', userRoutes)
}
