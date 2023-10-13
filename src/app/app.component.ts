import { Component } from '@angular/core';
import {
  brandSet,
  cilCheckAlt,
  cilCommentBubble,
  cilSortDescending,
  cilTrash,
} from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconSet: IconSetService) {
    this.iconSet.icons = {
      cilTrash,
      cilCommentBubble,
      cilSortDescending,
      cilCheckAlt,
      ...brandSet,
    };
  }
}
