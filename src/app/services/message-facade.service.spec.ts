import { TestBed } from '@angular/core/testing';

import { MessageFacadeService } from './message-facade.service';

describe('MessageFacadeService', () => {
  let service: MessageFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
