import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';

import { ApiEndPoints,SharedService,BaseService } from "../Shared/index";

@Injectable({ providedIn: 'root'})
export class PersonService extends BaseService
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

    ChildSampleFunction(_resource: any) 
    {
        return this._http.get(ApiEndPoints.Login.toString(), _resource )
        .pipe(map(this.extractData),
         catchError(err => this.handleError(err, this.FullUrl.toString())
         ));
    }

    ChildSample2Function(_resource: any) 
    {
        return this._http.get("URL", _resource )
        .pipe(map(this.extractData),
         catchError(err => this.handleError(err, this.FullUrl.toString())
         ));
    }

    // ChildSample3Function() : Observable<>
    // {
    //     this.Get(ApiEndPoints.AllPaymentUsers)
    // }

}