import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';

import { ApiEndPoints,SharedService,BaseService } from "../Shared/index";

@Injectable({ providedIn: 'root'})
export class ReportingService extends BaseService
{
    constructor(_http:HttpClient, _shared:SharedService){ 
        super(_http,_shared);
    }

    ChildFunction(_resource: any) 
    {
        this.API_ENDPOINT = ApiEndPoints.Login.toString();
        this.SetFullUrl();

        return this._http.get(this.FullUrl.toString(), _resource )
        .pipe(map(this.extractData),
         catchError(err => this.handleError(err, this.FullUrl.toString())
         ));
    }

}