import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person } from '../../../../../Core/Models/index';
import { ApiEndPoints,PersonService,SharedService } from '../../../../../Core/Services/index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons : Person[];

  constructor(private _service:PersonService,
    private _sharedService:SharedService,
    private _httpClient : HttpClient) { 
      this._service = new PersonService(this._httpClient,this._sharedService);
    }


  ngOnInit() {
    this._service.Get(ApiEndPoints.AllUsers).subscribe(x=>{
      this.persons = x;
    });
  }

}
