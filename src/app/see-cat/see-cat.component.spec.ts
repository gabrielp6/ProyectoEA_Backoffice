import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCatComponent } from './see-cat.component';

describe('SeeCatComponent', () => {
  let component: SeeCatComponent;
  let fixture: ComponentFixture<SeeCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
