import { Directive, HostListener, Input } from '@angular/core'

import { IntercomMessengerService } from '../intercom-messenger.service'

@Directive({
  selector: '[intercomShowNewMessage]'
})
export class IntercomShowNewMessageDirective {
  @Input() message: string
  @Input() intercomShowNewMessage: string

  constructor(private intercom: IntercomMessengerService) {
  }

  @HostListener('click')
  onClick() {
    const msg = this.message ? this.message : this.intercomShowNewMessage
    if (msg) {
      this.intercom.showNewMessage(this.message)
    } else {
      this.intercom.showNewMessage()
    }
  }
}
