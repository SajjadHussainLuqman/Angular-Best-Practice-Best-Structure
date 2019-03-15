import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  pageModel: FormGroup;
  emailCharacterCounter: number;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.pageModel = this._formBuilder.group({
      myFullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
      myEmail: [''],
      mySkills: this._formBuilder.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
      }),
    });

    this.pageModel.get('myEmail').valueChanges.subscribe(value => {
      this.emailCharacterCounter = value.length;
    });

    this.pageModel.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.pageModel.get('mySkills').valueChanges.subscribe(value => {
      console.log(value);
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
