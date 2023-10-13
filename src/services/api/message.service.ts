import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostMessage } from 'src/interfaces/PostMessage';
import { Message } from 'src/interfaces/Message';
import { Config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  private url = Config.apiUrl;

  getMessages() {
    return this.http.get<Array<Message>>(this.url);
  }

  postMessage(data: PostMessage) {
    const url = `${this.url}/`;
    return this.http.post<Message>(url, data);
  }

  deleteMessage(messageId: number) {
    const url = `${this.url}/${messageId}`;
    return this.http.delete(url);
  }
}
