import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  states = [ "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
             "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
             "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  /*
  clientForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    })
  });
  */

  clientForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: ['']
    })
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
