import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {


  clientForm = this.formBuilder.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ]],
    lastName: ['', [
      Validators.required, 
      Validators.minLength(5),
      Validators.maxLength(50)
    ]],
    birth: [new Date(), [Validators.required]],
    age: [0, [
      Validators.required,
      Validators.min(1),
      Validators.max(120)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    street: ['', [
      Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(60)
    ]],
    city: ['', [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(60)
    ]],
    state: ['', [
      Validators.required
    ]],
    phone1: ['', [
      Validators.required
    ]],
    phone2: ['', [
      Validators.required
    ]], 
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.clientForm.value);
  }

}
