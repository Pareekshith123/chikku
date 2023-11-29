// file.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      request.headers.has('Content-Type') &&
      request.headers.get('Content-Type')?.startsWith('multipart/form-data')
    ) {
      const clonedRequest = request.clone({
        setHeaders: {
          
        },
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
