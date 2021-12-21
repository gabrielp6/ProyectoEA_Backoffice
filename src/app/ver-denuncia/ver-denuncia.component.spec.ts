import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDenunciaComponent } from './ver-denuncia.component';

describe('VerDenunciaComponent', () => {
  let component: VerDenunciaComponent;
  let fixture: ComponentFixture<VerDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDenunciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
