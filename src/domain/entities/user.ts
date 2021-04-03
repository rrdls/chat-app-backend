export type User = {
  _id?: string
  name: string
  email: string
  password: string
  channels: Channel[]
}

type Channel = {
  name: string
  messages: Message[]
}

type Message = {
  _id?: string
  message: string
  name: string
  timestamp: Date
  received?: boolean
  user_id: string
  _v?: number
}
