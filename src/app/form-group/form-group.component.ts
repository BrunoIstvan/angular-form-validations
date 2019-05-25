import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  clientForm = new FormGroup({
    first: new FormControl(''),
    last: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      complement: new FormControl(''),
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.clientForm.value);
  }

}
