import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services";



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService, private router: Router ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authService.getCurrentSession();
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    token: `${currentUser.token}`
                }
            });
        }

        return next.handle(request).pipe(
            tap(event => {

            }, error => {
                if(error.status == "401")
                {
                    this.authService.logout();
                    this.router.navigate(['/login']);
                }

            })
        );
    }
}
