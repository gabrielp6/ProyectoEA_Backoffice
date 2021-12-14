import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPublicacionComponent } from './datos-publicacion.component';

describe('DatosPublicacionComponent', () => {
  let component: DatosPublicacionComponent;
  let fixture: ComponentFixture<DatosPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
