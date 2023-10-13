import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSortComponent } from './message-sort.component';

describe('MessageSortComponent', () => {
  let component: MessageSortComponent;
  let fixture: ComponentFixture<MessageSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageSortComponent]
    });
    fixture = TestBed.createComponent(MessageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
