import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const start = +new Date();

        let handler = next.handle(req);
        if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
            handler = handler.finally(() => console.log(+new Date() - start));
        }

        return handler;
    }
}
