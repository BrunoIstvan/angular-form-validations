import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl();

  constructor() { }

  ngOnInit() {

    this.firstName.valueChanges
      .subscribe((fn) => console.log('FirstName: ', fn))

    this.lastName.valueChanges
      .subscribe((fn) => console.log('LastName: ', fn))

  }

  setFirstAndLastName() {
    this.firstName.setValue('Bruno Istvan');
    this.lastName.setValue('Campos Monteiro');
  }

}
