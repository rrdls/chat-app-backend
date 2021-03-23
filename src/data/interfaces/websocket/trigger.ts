export interface ITrigger {
  trigger(channel: string, event: string, data: any): Promise<void>
}
