import { Express } from 'express'
import cors from 'cors'
import express from 'express'

export const setupMiddlewares = (app: Express): void => {
  app.use(express.json())
  app.use(cors())
}
