export interface IWebSocket {
  trigger(channel: string, event: string, data: any): Promise<void>
  getAllUsersOnChannel(): Promise<void>
}
