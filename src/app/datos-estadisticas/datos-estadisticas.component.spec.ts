import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEstadisticasComponent } from './datos-estadisticas.component';

describe('DatosEstadisticasComponent', () => {
  let component: DatosEstadisticasComponent;
  let fixture: ComponentFixture<DatosEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEstadisticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
