import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColonyComponent } from './newcolony.component';

describe('NewColonyComponent', () => {
  let component: NewColonyComponent;
  let fixture: ComponentFixture<NewColonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewColonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
