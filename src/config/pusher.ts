import Pusher from 'pusher'

const pusher = new Pusher({
  appId: '1150691',
  key: '3fd0bf5e51fea33ce05a',
  secret: '4984d889c427f599264c',
  cluster: 'eu',
  useTLS: true
})

export default pusher
