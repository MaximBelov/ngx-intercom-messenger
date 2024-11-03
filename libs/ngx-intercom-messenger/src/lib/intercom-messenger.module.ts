import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MinimumBootArgs } from "@intercom/messenger-js-sdk/types";


import { IntercomHideDirective } from './directives/hide.directive'
import { IntercomShowMessagesDirective } from './directives/show-messages.directive'
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive'
import { IntercomShowDirective } from './directives/show.directive'
import { IntercomShutdownDirective } from './directives/shutdown.directive'
import { IntercomTrackEventDirective } from './directives/track-event.directive'
import { IntercomMessengerService, INTERCOM_MESSENGER_SETTINGS } from './intercom-messenger.service'

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    IntercomHideDirective,
    IntercomShowMessagesDirective,
    IntercomShowNewMessageDirective,
    IntercomShowDirective,
    IntercomShutdownDirective,
    IntercomTrackEventDirective
  ],
  exports: [
    IntercomHideDirective,
    IntercomShowMessagesDirective,
    IntercomShowNewMessageDirective,
    IntercomShowDirective,
    IntercomShutdownDirective,
    IntercomTrackEventDirective
  ]
})
export class IntercomMessengerModule {
  static forRoot(config: MinimumBootArgs): ModuleWithProviders<IntercomMessengerModule> {
    return {
      ngModule: IntercomMessengerModule,
      providers: [
        IntercomMessengerService,
        { provide: INTERCOM_MESSENGER_SETTINGS, useValue: config },
      ]
    }
  }

  static forFeature(): ModuleWithProviders<IntercomMessengerModule> {
    return {
      ngModule: IntercomMessengerModule,
    }
  }
}
