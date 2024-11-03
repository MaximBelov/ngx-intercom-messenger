import { Directive, HostListener, Input } from '@angular/core'

import { IntercomMessengerService } from '../intercom-messenger.service'

@Directive({
  selector: '[intercomTrackEvent]'
})
export class IntercomTrackEventDirective {
  @Input() event: string
  @Input() intercomTrackEvent: string
  @Input() metadata: never

  constructor(private intercom: IntercomMessengerService) {
  }

  @HostListener('click')
  public onClick(): void {
    const e = this.event ? this.event : this.intercomTrackEvent
    if (e && this.metadata) {
      this.intercom.trackEvent(e, this.metadata)
    } else if (e && !this.metadata) {
      this.intercom.trackEvent(e)
    } else {
      throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.')
    }
  }
}
