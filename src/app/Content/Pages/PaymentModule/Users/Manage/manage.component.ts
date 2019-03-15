import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  pageModel: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pageModel = this._formBuilder.group({
      myFullName: [''],
      myEmail: [''],
      mySkills: this._formBuilder.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
      }),
    });
  }

  onSubmit() {
    console.log(this.pageModel.value);
  }

  onLoadDataClick() {
    this.pageModel.setValue({
      myFullName: 'Sajjad Hussain',
      myEmail: 'sajjadlogic@live.com',
      mySkills: {
        skillName: 'C#',
        experienceInYears: 5,
        proficiency: 'beginner'
      }
    });

    // Partial Load then Use patchValue

    // this.pageModel.patchValue({
    //   myFullName: 'Sajjad Hussain',
    //   myEmail: 'sajjadlogic@live.com'
    // });

  }
}
