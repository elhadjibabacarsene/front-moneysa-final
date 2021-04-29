import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TokenService} from '../tokenService/token.service';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url !== environment.apiUrl + '/login') {
      return from(this.tokenService.getToken()).pipe(
        switchMap(token => {
          req = req.clone({
            setHeaders: {
              Authorization: 'Bearer ' + token
            }
          });
          // console.log(req);
          return next.handle(req);
        }));
    }
    return next.handle(req);
  }
}
