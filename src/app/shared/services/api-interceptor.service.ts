import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import Cookies from "js-cookie";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = Cookies.get('token');

    if (req.url.startsWith('http')) return next.handle(req);

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`,
        },
        url: `${ environment.apiUrl }${ req.url }`,
        withCredentials: true,
      });
    } else {
      request = req.clone({
        url: `${ environment.apiUrl }${ req.url }`,
        withCredentials: true,
      });
    }

    return next.handle(request);
  }
}
