import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

  states = [ "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
            "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
            "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  client = {
    firstName: '',
    lastName: '',
    birth: new Date(),
    email: '',
    age: 0,
    street: '',
    city: '',
    state: '',
    phone1: 0,
    phone2: 0
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.client);

  }

}
