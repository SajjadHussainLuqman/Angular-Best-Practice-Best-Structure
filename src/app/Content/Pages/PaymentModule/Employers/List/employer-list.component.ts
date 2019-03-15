import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Payment } from '../../../../../Core/Models/index';
import { ApiEndPoints,PaymentService,SharedService } from '../../../../../Core/Services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  paymentUsers : Observable<Payment[]>;

  constructor(private _paymentService:PaymentService,
              private _sharedService:SharedService,
              private _httpClient : HttpClient) { 
                this._paymentService = new PaymentService(this._httpClient,this._sharedService);
              }

  ngOnInit() {
   this.paymentUsers = this._paymentService.Get(ApiEndPoints.AllPaymentUsers);
  }

}
