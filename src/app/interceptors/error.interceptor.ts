import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          const errorMessage = this.getErrorMessage(error);
          this.showToastError(errorMessage);
        }

        return throwError(() => error);
      })
    );
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    console.log('Error', error.message);
    if (error.status === 0) {
      return 'Network error: Please check your internet connection.';
    }

    if (error.status === 403) {
      return 'Forbidden. Please enter correct API key.';
    }

    return 'An error occurred. Please try again later.';
  }

  private showToastError(message: string): void {
    this.toastr.error(message, 'Error', {
      timeOut: 5000, // 5 seconds
      progressBar: true,
      closeButton: true,
    });
  }
}
