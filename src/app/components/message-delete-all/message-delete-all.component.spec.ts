import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDeleteAllComponent } from './message-delete-all.component';

describe('MessageDeleteAllComponent', () => {
  let component: MessageDeleteAllComponent;
  let fixture: ComponentFixture<MessageDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDeleteAllComponent]
    });
    fixture = TestBed.createComponent(MessageDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
