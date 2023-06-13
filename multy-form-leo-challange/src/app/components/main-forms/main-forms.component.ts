import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-forms',
  templateUrl: './main-forms.component.html',
  styleUrls: ['./main-forms.component.scss']
})
export class MainFormsComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNum: ['', Validators.required],
    onlineService: [false],
    largerStorage: [false],
    costumizable: [false],

  })
  currentStep: number = 1;
  constructor(private fb: FormBuilder) {
  }

  isSubmitted = false;
  

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phoneNum() {
    return this.registerForm.get('phoneNum');
  }
  

  nextStep() {
    if( this.username.dirty && this.email.dirty && this.phoneNum.dirty) {
      this.currentStep++;
    }else {
      console.log("form is invalid")
      this.isSubmitted = true;
    }
  }


  get username_val()
  {
    return this.registerForm.get('username')
  }

  previousStep() {
    this.currentStep--;
  }
 

}
