export interface IDeleteAllMessagesRepository {
  drop(): Promise<void>
}
