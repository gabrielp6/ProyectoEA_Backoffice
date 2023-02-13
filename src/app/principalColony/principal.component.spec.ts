import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalColonyComponent } from './principal.component';

describe('PrincipalColonyComponent', () => {
  let component: PrincipalColonyComponent;
  let fixture: ComponentFixture<PrincipalColonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalColonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
