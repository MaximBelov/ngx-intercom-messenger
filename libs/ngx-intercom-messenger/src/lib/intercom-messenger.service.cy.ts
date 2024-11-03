import { IntercomMessengerService, IntercomMessengerModule } from 'ngx-intercom-messenger';

describe('IntercomMessengerService', () => {
  it('should mount', () => {
    cy.mount('', {
      imports: [
        IntercomMessengerModule.forRoot({ app_id: 'abc123' })
      ]
    }).then(({ fixture }) => {
      fixture.debugElement.injector.get(IntercomMessengerService);
    });
  })
})
