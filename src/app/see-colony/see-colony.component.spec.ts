import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeColonyComponent } from './see-colony.component';

describe('SeeColonyComponent', () => {
  let component: SeeColonyComponent;
  let fixture: ComponentFixture<SeeColonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeColonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
