import { Component } from '@angular/core';
import { MessageFacadeService } from 'src/app/services/message-facade.service';
import { MessageSortOption } from 'src/enums/MessageSortOption';
import { Nullable } from 'src/utils/common';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent {
  $messages = this.messageService.getMessages();
  $sortOrder = this.messageService.getSortOption();

  constructor(private messageService: MessageFacadeService) {}

  ngOnInit() {
    this.messageService.loadMessages();
  }

  deleteMessage(id: number) {
    this.messageService.removeMessage(id);
  }

  sortOrderChange(sortOrder: Nullable<MessageSortOption>) {
    if (sortOrder !== null) this.messageService.sortChange(sortOrder);
  }
}
