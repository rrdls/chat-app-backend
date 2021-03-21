import { Express } from 'express'
import routes from '../routes/message-routes'

export const setupRoutes = (app: Express): void => {
  app.use('/api/v1/', routes)
}
