import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeValidationFormComponent } from './native-validation-form.component';

describe('NativeValidationFormComponent', () => {
  let component: NativeValidationFormComponent;
  let fixture: ComponentFixture<NativeValidationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeValidationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
