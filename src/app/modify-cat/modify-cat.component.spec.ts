import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCatComponent } from './modify-cat.component';

describe('ModifyCatComponent', () => {
  let component: ModifyCatComponent;
  let fixture: ComponentFixture<ModifyCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
