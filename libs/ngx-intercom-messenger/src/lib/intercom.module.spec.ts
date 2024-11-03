import { IntercomMessengerModule } from './intercom-messenger.module'

describe('IntercomMessengerModule', () => {
  let intercomMessengerModule: IntercomMessengerModule

  beforeEach(() => {
    intercomMessengerModule = new IntercomMessengerModule()
  })

  it('should create an instance', () => {
    expect(intercomMessengerModule).toBeTruthy()
  })
})
