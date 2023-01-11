import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DatasInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const created = 'BY PAVAN T Y';

    console.log('date is ', typeof created);
    const req = request.clone({
      setHeaders: {
        created,
      },
    });
    return next.handle(req);
  }
}
