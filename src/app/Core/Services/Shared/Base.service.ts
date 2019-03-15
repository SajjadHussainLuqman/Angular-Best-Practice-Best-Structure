import { HttpClient, HttpErrorResponse, HttpHeaders,  HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SharedService } from './Shared.service';

import { AppError,NotFoundError,BadInput } from '../../utilities/errorHandling/index';

@Injectable({ providedIn: 'root' })
export class BaseService {

    //readonly BaseUrl: String = 'http://localhost/api/';
    readonly BaseUrl: String = 'https://mydatabaseapi.firebaseio.com/';

    public API_ENDPOINT: String = '';
    FullUrl: String = '';

    constructor(protected _http: HttpClient, protected _shared: SharedService) {
    }

    SetFullUrl() {
        this.FullUrl = this.BaseUrl + '' + this.API_ENDPOINT;
    }

    Get(ENDPOINT: String) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.get(this.FullUrl.toString(), this._shared.getReqOptWithAccessToken())
            .pipe(map(this.extractData),
                catchError(err => this.handleError(err, this.FullUrl.toString()))
            );
    }

    GetById(ENDPOINT: String, _Id: Number) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.get(this.FullUrl.toString() + '/' + _Id, this._shared.getReqOptWithAccessToken())
            .pipe(map(this.extractData),
                catchError(err => this.handleError(err, this.FullUrl.toString()))
            );
    }

    Add(ENDPOINT: String, _resource: any) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.post(this.FullUrl.toString(), _resource, this._shared.getReqOptWithAccessToken())
            .pipe(map(this.extractData),
                catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    Update(ENDPOINT: String, _resource: any) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.put(this.FullUrl.toString(), _resource, this._shared.getRequestWithBasic())
            .pipe(map(this.extractData),
                catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    Delete(ENDPOINT: String, _Id: Number) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.delete(this.FullUrl.toString() + '/' + _Id, this._shared.getReqOptWithAccessToken())
            .pipe(map(this.extractData),
                catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    protected extractData(res: any) {
        let body = res;
        console.log(res);
        return body || {};
    }

    handleError(error: HttpErrorResponse | any, methodName: string) {
        console.log(error);
        if (error.error instanceof ErrorEvent) {
            console.log(error);
            // A client-side or network error occurred. Handle it accordingly.
            console.log(methodName + " failed due to " + error + " - || Client or Network Side Error");
        } else {
            // The backend returned an unsuccessful response code.
            console.log(error);
            // The response body may contain clues as to what went wrong,
            console.log(methodName + " failed due to " + error + " - || Server Side Response Error");
        }

        if (error.status === 404) {
            throwError(new NotFoundError());  // Not unexpected Error so no need to save in server side
        }
        if (error.status === 400) {
            throwError(new BadInput(error.json()));  // Not unexpected Error so no need to save in server side
        }

        return throwError(new AppError(error));
    }
}