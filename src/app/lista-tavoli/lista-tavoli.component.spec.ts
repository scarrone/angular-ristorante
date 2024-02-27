import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTavoliComponent } from './lista-tavoli.component';

describe('ListaTavoliComponent', () => {
  let component: ListaTavoliComponent;
  let fixture: ComponentFixture<ListaTavoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTavoliComponent]
    });
    fixture = TestBed.createComponent(ListaTavoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
