import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  clientForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    phones: this.formBuilder.array(['']),
    children: this.formBuilder.array([])
    /*
    children: this.formBuilder.group({
      name: [''],
      age: ['']
    })
    */
  });

  phones = this.clientForm.get('phones') as FormArray;
  children = this.clientForm.get('children') as FormArray;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.clientForm.value);

  }

  addPhone() {

    this.phones.push(this.formBuilder.control(''));

  }

  addChild() {
    this.children.push(
      this.formBuilder.group({
        name: this.formBuilder.control(''),
        age: ['']
      })
    )
  }

}
