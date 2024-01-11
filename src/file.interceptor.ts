// // file.interceptor.ts
// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpEvent,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class FileInterceptor implements HttpInterceptor {
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('Interceptor is running');
//     if (
//       request.headers.has('Content-Type') &&
//       request.headers.get('Content-Type')?.startsWith('multipart/form-data')
//     ) {
//       const clonedRequest = request.clone({
//         setHeaders: {

//         },
//       });
//       return next.handle(clonedRequest);
//     }
//     if (request.headers.has('Authorization')) {
//       console.log('Interceptor is handling request with Authorization header');
//       console.log('Headers:', request.headers.keys());

//       const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

//       const headers = request.headers.set('Authorization', `Bearer ${token}`);
//       const clonedRequest = request.clone({ headers });

//       console.log('Headers before cloning:', request.headers.keys());
//       console.log('Headers after cloning:', clonedRequest.headers.keys());

//       return next.handle(clonedRequest);
//     }


//     console.log('Interceptor is not modifying the request');
//     return next.handle(request);
//   }
// }


import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token=localStorage.getItem('token');
  // token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MTEzOTY0MTUzIiwiaWF0IjoxNzA0Njk5NjU1fQ.LNEiSmNcc0sqvBI2uau85qUX_h7SQZ1niEJl1TvJBoc"
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    authReq = request.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        Authorization: `Bearer ${this.token}`
      }
    });

    return next.handle(authReq).pipe(tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse){
          if (err.status !== 401){
            return
          }
          window.location.href = '';
        }
      }
    ));
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
