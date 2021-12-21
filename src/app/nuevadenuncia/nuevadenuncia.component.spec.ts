import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevadenunciaComponent } from './nuevadenuncia.component';

describe('NuevadenunciaComponent', () => {
  let component: NuevadenunciaComponent;
  let fixture: ComponentFixture<NuevadenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevadenunciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevadenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
