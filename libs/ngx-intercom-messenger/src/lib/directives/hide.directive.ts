import { Directive, HostListener, Input } from '@angular/core'

import { IntercomMessengerService } from '../intercom-messenger.service';


@Directive({
  selector: '[intercomHide]'
})
export class IntercomHideDirective {
  @Input() intercomHide: boolean

  constructor(
    private intercom: IntercomMessengerService
  ) {
  }

  @HostListener('click')
  public onClick(): void {
    if (this.intercomHide !== false) {
      this.intercom.hide()
    }
  }
}
