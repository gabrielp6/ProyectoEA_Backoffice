import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDenunciaComponent } from './modificar-denuncia.component';

describe('ModificarDenunciaComponent', () => {
  let component: ModificarDenunciaComponent;
  let fixture: ComponentFixture<ModificarDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDenunciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
