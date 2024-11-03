import { Directive, HostListener, Input } from '@angular/core'

import { IntercomMessengerService } from '../intercom-messenger.service'

@Directive({
  selector: '[intercomShutdown]'
})
export class IntercomShutdownDirective {
  @Input() intercomShutdown = false

  constructor(private intercom: IntercomMessengerService) {
  }

  @HostListener('click')
  public onClick(): void {
    if (this.intercomShutdown) {
      this.intercom.shutdown()
    }
  }
}
