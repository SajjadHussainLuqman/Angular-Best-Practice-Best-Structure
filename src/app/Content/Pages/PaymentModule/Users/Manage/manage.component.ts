import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
      myFullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
      myEmail: ['',[Validators.required,Validators.email]],
      mySkills: this._formBuilder.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
      }),
    });

  }

  onSubmit() {
    this.logKeyValuePairs(this.pageModel);
  }

  logKeyValuePairs(group: FormGroup): void {

    Object.keys(group.controls).forEach((key: string) => {

      // Get a reference to the control using the FormGroup.get() method
      const abstractControl = group.get(key);

      // If the control is an instance of FormGroup i.e a nested FormGroup
      // then recursively call this same method (logKeyValuePairs) passing it
      // the FormGroup so we can get to the form controls in it

      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
        // If the control is not a FormGroup then we know it's a FormControl
      }
      else {
        console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
      }

    });
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
