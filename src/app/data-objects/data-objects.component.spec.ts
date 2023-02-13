import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataObjectsComponent } from './data-objects.component';

describe('ObjectsDataComponent', () => {
  let component: DataObjectsComponent;
  let fixture: ComponentFixture<DataObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
