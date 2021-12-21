import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDenunciasComponent } from './datos-denuncias.component';

describe('DatosDenunciasComponent', () => {
  let component: DatosDenunciasComponent;
  let fixture: ComponentFixture<DatosDenunciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDenunciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
