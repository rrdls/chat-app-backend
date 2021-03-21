import dotenv from 'dotenv'
dotenv.config()
export const env = {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT || 5050
}
