import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalObjectComponent } from './principal.component';

describe('PrincipalCatComponent', () => {
  let component: PrincipalObjectComponent;
  let fixture: ComponentFixture<PrincipalObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
