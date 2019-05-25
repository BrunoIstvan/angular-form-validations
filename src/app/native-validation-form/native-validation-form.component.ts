import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-validation-form',
  templateUrl: './native-validation-form.component.html',
  styleUrls: ['./native-validation-form.component.css']
})
export class NativeValidationFormComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}
