import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageSortOption } from 'src/enums/MessageSortOption';
import { Nullable } from 'src/utils/common';

const MessageSortOptions = [
  {
    label: 'Recent Messages',
    value: MessageSortOption.RECENT,
  },
  {
    label: 'Oldest Messages',
    value: MessageSortOption.OLDEST,
  },
];

@Component({
  selector: 'message-sort',
  templateUrl: './message-sort.component.html',
  styleUrls: ['./message-sort.component.scss'],
})
export class MessageSortComponent {
  @Output() onSortOrderChange = new EventEmitter<Nullable<MessageSortOption>>();
  @Input() sortOrder: Nullable<MessageSortOption> = MessageSortOption.RECENT;
  MessageSortOptions = MessageSortOptions;

  get messageSortOption(): typeof MessageSortOption {
    return MessageSortOption;
  }

  sortChange(sortOption: MessageSortOption) {
    this.onSortOrderChange.emit(sortOption);
  }
}
