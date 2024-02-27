import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTavoloComponent } from './form-tavolo.component';

describe('FormTavoloComponent', () => {
  let component: FormTavoloComponent;
  let fixture: ComponentFixture<FormTavoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTavoloComponent]
    });
    fixture = TestBed.createComponent(FormTavoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
