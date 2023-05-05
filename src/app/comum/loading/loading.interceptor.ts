import {
    HttpHandler,
    HttpHeaderResponse,
    HttpInterceptor,
    HttpProgressEvent,
    HttpRequest,
    HttpResponse,
    HttpSentEvent,
    HttpUserEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

type MeuTipo = HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<null> | HttpUserEvent<null>;

@Injectable({ providedIn: 'root' })

export class LoadingInterceptor implements HttpInterceptor {
    constructor(private readonly loadingService: LoadingService) {
    }

    intercept(req: HttpRequest<null>, next: HttpHandler):
        Observable<MeuTipo> {
        return next
            .handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.loadingService.stop();
                } else {
                    this.loadingService.start();
                }
            }))
            .pipe(catchError(err => {
                this.loadingService.stop();
                throw err;
            }));
    }
}
