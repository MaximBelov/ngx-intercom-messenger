import { Directive, HostListener, Input } from '@angular/core'

import { IntercomMessengerService } from '../intercom-messenger.service';

@Directive({
  selector: '[intercomShowMessages]'
})
export class IntercomShowMessagesDirective {
  @Input() intercomShowMessages: boolean

  constructor(private intercom: IntercomMessengerService) {
  }

  @HostListener('click')
  public onClick(): void {
    if (this.intercomShowMessages !== false) {
      this.intercom.showMessages()
    }
  }
}
