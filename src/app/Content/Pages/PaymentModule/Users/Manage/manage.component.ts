import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  pageModel: FormGroup;

  constructor() { }

  ngOnInit() {
    this.pageModel = new FormGroup({
      myFullName: new FormControl(),
      myEmail: new FormControl(),
      mySkills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      }),
    });
  }

  onSubmit() {
    console.log(this.pageModel.value);
  }

}
