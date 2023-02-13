import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataColoniesComponent } from './data-colonies.component';

describe('ColoniesDataComponent', () => {
  let component: DataColoniesComponent;
  let fixture: ComponentFixture<DataColoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataColoniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataColoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
