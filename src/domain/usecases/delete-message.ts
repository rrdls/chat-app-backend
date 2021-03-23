export interface IDeleteMessage {
  delete(id: string): Promise<void>
}
