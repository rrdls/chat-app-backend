import { MongoClient, Collection } from 'mongodb'

export interface IMongoHelper {
  uri: string
  client: MongoClient
  connect(uri: string): Promise<void>
  disconnect(): Promise<void>
  getCollection(name: string): Promise<Collection>
  map(data: any): any
  mapCollection(collection: any[]): any[]
}
