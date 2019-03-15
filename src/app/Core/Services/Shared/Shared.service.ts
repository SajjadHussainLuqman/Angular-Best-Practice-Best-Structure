import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class SharedService {

    urlParam(obj: any): string {
		return Object.keys(obj)
			.map(k => k + '=' + encodeURIComponent(obj[k]))
			.join('&');
	}

    getContentTypeJsonReqOpt() {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        let httpOptions  = { headers: headers };  
        return httpOptions;
    }

    getContentAllowAllOrigin() {
        let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        let httpOptions  = { headers: headers };  
        return httpOptions;
    }

    getContentTypeJsonPReqOpt() {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/jsonp');

        headers = new HttpHeaders({
            "Content-Type": "application/json", 
            "Accept": "application/json"
        })
        
        return headers;
    }

    getContentTypeUrlReqOpt() {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }

    getReqOptWithAccessToken() {
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        let httpOptions  = { headers: headers };  
        return httpOptions;
    }

    getReqOptWithBasicOnlyForLogin(userName:string,Password:string) {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + btoa(userName+":"+Password));
        let httpOptions  = { headers: headers };  
        return httpOptions;
    }
   
    getRequestWithBasic() {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + localStorage.getItem('access_token'));
        let httpOptions  = { headers: headers };  
        return httpOptions;
    }
}