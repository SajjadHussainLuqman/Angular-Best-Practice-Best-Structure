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
      myEmail: ['', [Validators.required, Validators.email]],
      mySkills: this._formBuilder.group({
        skillName: ['', [Validators.required]],
        experienceInYears: ['', [Validators.required]],
        proficiency: ['', [Validators.required]]
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

        // Clear the existing validation errors
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid) {
          // Get all the validation messages of the form control
          // that has failed the validation
          const messages = this.validationMessages[key];
          // Find which validation has failed. For example required,
          // minlength or maxlength. Store that error message in the
          // formErrors object. The UI will bind to this object to
          // display the validation errors
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }

    });
  }

  // Notice, each key in this object has the same name as the
  // corresponding form control
  formErrors = {
    'myFullName': '',
    'myEmail': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    'myFullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 8 characters.'
    },
    'myEmail': {
      'required': 'Email is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };

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
  }
}
