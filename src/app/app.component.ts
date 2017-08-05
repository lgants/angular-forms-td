import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  // defaultQuestion uses one-way property binding to set a default value
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // setValue sets the value for ALL input controls on the form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    // patchValue sets the value for ONLY the specified input controls on the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // Removed during implementation of ViewChild
  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  // uses ViewChild approach, which unlike the other approach, provides access to data before the form is submitted
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.userData.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // reset will reset the form (including state such as valid, touched, etc.)
    this.signupForm.reset();
  }
}
