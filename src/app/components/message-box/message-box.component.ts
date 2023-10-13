import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from 'src/interfaces/Message';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent {
  @Input({ required: true }) message!: Message;
  @Output() onDelete = new EventEmitter<number>();

  constructor() {}
}
