import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';

import { ApiEndPoints,SharedService,BaseService } from "../Shared/index";

@Injectable({ providedIn: 'root'})
export class AuthService extends BaseService
{
    constructor(_http:HttpClient, _shared:SharedService){ 
        super(_http,_shared);
    }

    LoginWithFullURL(_resource: any) 
    {
        return this._http.post("URL", _resource)
        .pipe(map(this.extractData),
         catchError(err => this.handleError(err, this.FullUrl.toString())
         ));
    }

    LoginOpenId(userName: string, Password: string) {
        this.API_ENDPOINT = ApiEndPoints.Login.toString();
        this.SetFullUrl();

        let header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        let params = new HttpParams()
            .append('username', userName)
            .append('password', Password)
            .append('grant_type', 'password')
            .append('scope', 'openid email phone profile offline_access roles');

        let requestBody = params.toString();

        return this._http.post(this.FullUrl.toString(), requestBody, { headers: header })
            .pipe(map(this.extractData),
                catchError(err => this.handleError(err, this.FullUrl.toString())
                ));
    }

}