import { HttpClient } from '@angular/common/http';
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

}