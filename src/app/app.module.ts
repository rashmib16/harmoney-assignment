import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MessageListComponent } from 'src/app/components/message-list/message-list.component';
import { MessageBoxComponent } from 'src/app/components/message-box/message-box.component';
import { MessageInputComponent } from 'src/app/components/message-input/message-input.component';
import { MessageDeleteAllComponent } from './components/message-delete-all/message-delete-all.component';
import { MessageSortComponent } from './components/message-sort/message-sort.component';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ErrorInterceptor } from 'src/app/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageBoxComponent,
    MessageInputComponent,
    MessageDeleteAllComponent,
    MessageSortComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    IconModule,
    CardModule,
    GridModule,
    FormModule,
    ModalModule,
    DropdownModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    IconSetService,
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
