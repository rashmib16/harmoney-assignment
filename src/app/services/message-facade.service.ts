import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, from, map, take, tap } from 'rxjs';
import { MessageSortOption } from 'src/enums/MessageSortOption';
import { Message } from 'src/interfaces/Message';
import { PostMessage } from 'src/interfaces/PostMessage';
import { MessageService } from 'src/services/api/message.service';

@Injectable({
  providedIn: 'root',
})
export class MessageFacadeService {
  private $messages = new BehaviorSubject<Array<Message>>([]);
  private $sort = new BehaviorSubject<MessageSortOption>(
    MessageSortOption.RECENT
  );

  constructor(private messageApiService: MessageService) {}

  loadMessages() {
    this.messageApiService
      .getMessages()
      .pipe(take(1))
      .subscribe((messages) => {
        this.setMessages(messages);
      });
  }

  getMessages() {
    return this.$messages.pipe(
      map((messages) => this.sortMessagesByOption(messages, this.$sort.value))
    );
  }

  getSortOption() {
    return this.$sort.asObservable();
  }

  postMessage(text: string) {
    const postMessage: PostMessage = { text };
    return this.messageApiService.postMessage(postMessage).pipe(
      tap((message) => {
        const messages = this.$messages.getValue();
        messages.push(message);
        this.setMessages(messages);
      }),
      take(1)
    );
  }

  removeMessage(messageId: number) {
    this.messageApiService
      .deleteMessage(messageId)
      .pipe(take(1))
      .subscribe(() => {
        const messages = this.$messages.getValue();
        const index = messages.findIndex((message) => message.id === messageId);
        messages.splice(index, 1);
        this.setMessages(messages);
      });
  }

  removeAllMessages() {
    const messageIds = this.$messages.getValue().map((message) => message.id);

    from(messageIds)
      .pipe(
        concatMap((messageId) =>
          this.messageApiService.deleteMessage(messageId)
        )
      )
      .pipe(take(messageIds.length))
      .subscribe(() => {
        this.setMessages([]);
      });
  }

  sortChange(sortOption: MessageSortOption) {
    this.$sort.next(sortOption);
    this.setMessages(this.$messages.getValue());
  }

  private setMessages(messages: Array<Message>) {
    this.$messages.next(messages);
  }

  private sortMessagesByOption(
    messages: Array<Message>,
    sortOption: MessageSortOption
  ): Array<Message> {
    switch (sortOption) {
      case MessageSortOption.RECENT:
        return messages
          .slice()
          .sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
      case MessageSortOption.OLDEST:
        return messages
          .slice()
          .sort(
            (a, b) =>
              new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
          );
      default:
        return messages;
    }
  }
}
