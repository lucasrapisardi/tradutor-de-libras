import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaVideoComponent } from './entrada-video.component';

describe('EntradaVideoComponent', () => {
  let component: EntradaVideoComponent;
  let fixture: ComponentFixture<EntradaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
