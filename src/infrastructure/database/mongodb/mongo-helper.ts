import { IMongoHelper } from './../../../data/interfaces/db'
import { MongoClient, Collection } from 'mongodb'

export class MongoHelper implements IMongoHelper {
  public client: MongoClient
  public uri: string

  constructor(uri: string) {
    this.uri = uri
  }

  async connect(): Promise<void> {
    this.client = await MongoClient.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  async disconnect(): Promise<void> {
    await this.client.close()
    this.client = null
  }

  async getCollection(name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect()
    }

    return this.client.db().collection(name)
  }

  map(data: any): any {
    const { _id, ...rest } = data
    return { ...rest, id: _id }
  }

  mapCollection(collection: any[]): any[] {
    return collection.map((c) => this.map(c))
  }
}
