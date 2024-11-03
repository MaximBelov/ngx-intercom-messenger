# ngx-intercom-messenger

This is an Intercom wrapper for Angular 18+ which supports AoTx

It intends to support all documented intercom methods and PRs for functionality is greatly appreciated.

### STABLE VERSION

`master` is now hosting the latest stable version of `ngx-intercom-messenger`.

If you find issues with this version, please file an issue as soon as possible so we can take a look at it. We appreciate your cooperation!

### Installation

This package is on NPM, so just run

 ```sh
$ npm install ngx-intercom-messenger@latest
 ```

### Configuration

1. Import `IntercomModule` to `app.module.ts`. The module will automatically include the APP_ID instantiation, so you DO NOT need to copy the install script from Intercom and place it in your `index.html`.

```ts
import { IntercomMessengerModule } from 'ngx-intercom-messenger';

@NgModule({
  imports: [
    ...
      IntercomMessengerModule.forRoot({
        app_id: <your_app_id>, // from your Intercom config
      })
    ...
  ]
})
export class AppModule {
}
```

2. Use in your components/directives/whatever you want!

```ts
// App
import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ngx-intercom-messenger';

@Component({
  selector: 'app',
  template: `...`
})
export class AppComponent implements OnInit {
  constructor(
    public intercom: Intercom
  ) {
  }

  ngOnInit() {
    this.intercom.boot({
      app_id: <app_id> // Please, pass your APP_ID
    });
  }
}
```
