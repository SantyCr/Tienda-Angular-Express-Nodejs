import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoProductosComponent } from './pago-productos.component';

describe('PagoProductosComponent', () => {
  let component: PagoProductosComponent;
  let fixture: ComponentFixture<PagoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
