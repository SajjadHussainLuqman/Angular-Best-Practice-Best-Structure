import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiEndPoints,SharedService,BaseService } from "../Shared/index";

@Injectable({ providedIn: 'root'})
export class PaymentService extends BaseService
{
    constructor(_http:HttpClient, _shared:SharedService){ 
        super(_http,_shared);
    }
}