import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCatsComponent } from './data-cats.component';

describe('CatsDataComponent', () => {
  let component: DataCatsComponent;
  let fixture: ComponentFixture<DataCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
