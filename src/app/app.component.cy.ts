import { AppComponent } from './app.component'
import { IntercomMessengerModule } from 'ngx-intercom-messenger';

describe('AppComponent', () => {
  it('should mount', () => {
    cy.mount(AppComponent, { imports: [IntercomMessengerModule.forRoot({ app_id: 'abc123' })] })
  })
})
