import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private _activatedRoute: ActivatedRoute) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!localStorage.getItem('access_token') || !localStorage.getItem('expires_in')
        || +(new Date(localStorage.getItem('expires_in'))) <= +(new Date())) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            console.log("Login Required!")
            
            return false;
        }
        else
        {
            console.log("Already Login")
            return true;
        }
    }
}