import { IntercomMessengerService, IntercomMessengerModule } from 'ngx-intercom-messenger';
import { TestBed } from '@angular/core/testing';

describe('IntercomMessengerService', () => {
  let service: IntercomMessengerService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [IntercomMessengerModule.forRoot({ app_id: 'abc123' })] });
    service = TestBed.inject(IntercomMessengerService);
  })

  it('should create an instance', () => {
    expect(service).toBeTruthy()
  })
})
