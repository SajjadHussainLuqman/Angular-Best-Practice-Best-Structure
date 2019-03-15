import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService, SharedService, ApiEndPoints } from '../../../../Core/Services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _user: FormGroup;

  constructor(private _loginService: AuthService,
    private _httpClient: HttpClient,
    private _sharedService: SharedService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._loginService = new AuthService(_httpClient, _sharedService);
  }

  ngOnInit() {

    this.logout();

    this._user = new FormGroup({
      UserName: new FormControl(),
      Password: new FormControl()
    });

  }

  OnSave() {

    this._loginService.Get(ApiEndPoints.Login.toString()).subscribe(x => {

      if (this._user.controls.UserName.value == x.UserName && this._user.controls.Password.value == x.Password) {
        var now = new Date();
        var twoHoursLater = new Date(now.getTime() + (24 * 1000 * 60 * 60));
        let expires_in = twoHoursLater.toString();

        localStorage.setItem('access_token', 'abcdefghijklmnopqrstuvwxyz');
        localStorage.setItem('expires_in', expires_in);
        this._router.navigate(['/']);
      }  else {
        console.log("Invalid Credentials");
      }

    });

  }

  logout() {
    localStorage.clear();
  }

}
