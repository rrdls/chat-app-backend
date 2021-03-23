export interface IDeleteMessageRepository {
  delete(id: string): Promise<void>
}
