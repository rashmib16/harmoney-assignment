import { Component } from '@angular/core';
import { MessageFacadeService } from 'src/app/services/message-facade.service';

@Component({
  selector: 'message-delete-all',
  templateUrl: './message-delete-all.component.html',
  styleUrls: ['./message-delete-all.component.scss'],
})
export class MessageDeleteAllComponent {
  visible = false;

  constructor(private messageService: MessageFacadeService) {}

  confirmDelete() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  deleteAll() {
    this.closeModal();
    this.messageService.removeAllMessages();
  }
}
