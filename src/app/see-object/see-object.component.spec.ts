import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeObjectComponent } from './see-object.component';

describe('SeeObjectComponent', () => {
  let component: SeeObjectComponent;
  let fixture: ComponentFixture<SeeObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
