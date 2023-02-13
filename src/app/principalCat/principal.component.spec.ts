import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCatComponent } from './principal.component';

describe('PrincipalCatComponent', () => {
  let component: PrincipalCatComponent;
  let fixture: ComponentFixture<PrincipalCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
