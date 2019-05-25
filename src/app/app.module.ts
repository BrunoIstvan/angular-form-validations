import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NativeValidationFormComponent } from './native-validation-form/native-validation-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    NativeValidationFormComponent,
    ValidationFormComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
    FormArrayComponent,
    ReactiveFormValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
