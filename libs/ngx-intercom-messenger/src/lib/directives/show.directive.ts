import { Directive, HostListener, Input } from '@angular/core'

import { IntercomMessengerService } from '../intercom-messenger.service';

@Directive({
  selector: '[intercomShow]'
})
export class IntercomShowDirective {
  @Input() message: string
  @Input() intercomShow: string

  constructor(private intercom: IntercomMessengerService) {
  }

  @HostListener('click')
  public onClick(): void {
    const msg = this.message ? this.message : this.intercomShow
    if (msg) {
      this.intercom.showNewMessage(this.message)
    } else {
      this.intercom.show()
    }
  }
}
