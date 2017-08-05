import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  // uses one-way property binding to set a default value
  defaultQuestion = 'pet';
  answer = '';
  
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  // }

  // Removed during implementation of ViewChild
  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  // uses ViewChild approach, which unlike the other approach, provides access to data before the form is submitted
  onSubmit() {
    console.log(this.signupForm);
  }
}
