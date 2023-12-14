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
    console.log('Interceptor is running');
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
    if (request.headers.has('Authorization')) {
      console.log('Interceptor is handling request with Authorization header');
      console.log('Headers:', request.headers.keys());

      const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjM2NTUyNH0.ZJP0FJJC5_vKbgzzthSEFhFk_mzkUFbd63FwJFM8bZ0';

      const headers = request.headers.set('Authorization', `Bearer ${token}`);
      const clonedRequest = request.clone({ headers });

      console.log('Headers before cloning:', request.headers.keys());
      console.log('Headers after cloning:', clonedRequest.headers.keys());

      return next.handle(clonedRequest);
    }


    console.log('Interceptor is not modifying the request');
    return next.handle(request);
  }
}
