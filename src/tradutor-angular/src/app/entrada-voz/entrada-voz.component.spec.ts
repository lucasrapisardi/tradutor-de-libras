import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaVozComponent } from './entrada-voz.component';

describe('EntradaVozComponent', () => {
  let component: EntradaVozComponent;
  let fixture: ComponentFixture<EntradaVozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaVozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaVozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
