import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'

import { IntercomMessengerService } from 'ngx-intercom-messenger'
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public intercom = inject(IntercomMessengerService);

  ngOnInit() {
    this.intercom.boot({
      app_id: environment.intercomAppId,
      alignment: 'left',
    })

    setTimeout(() => this.intercom.update({
      alignment: 'right',
    }), 1000)

  }
}
