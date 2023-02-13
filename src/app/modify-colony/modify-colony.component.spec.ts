import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyColonyComponent } from './modify-colony.component';

describe('ModifyColonyComponent', () => {
  let component: ModifyColonyComponent;
  let fixture: ComponentFixture<ModifyColonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyColonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
