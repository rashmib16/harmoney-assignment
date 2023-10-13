import { Component } from '@angular/core';
import { MessageFacadeService } from 'src/app/services/message-facade.service';

const REQUIRED_ERROR_MESSAGE = 'Please enter a message';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
})
export class MessageInputComponent {
  message: string = '';
  error: string = '';

  constructor(private messageService: MessageFacadeService) {}

  onPostClick() {
    if (this.message.length > 0) {
      this.messageService.postMessage(this.message).subscribe(() => {
        this.reset();
      });
    } else {
      this.onInputChange(this.message);
    }
  }

  onInputChange(input: string) {
    this.error = input.length > 0 ? '' : REQUIRED_ERROR_MESSAGE;
  }

  reset() {
    this.message = '';
    this.error = '';
  }
}
