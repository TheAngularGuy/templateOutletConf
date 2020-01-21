import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOneComponent } from './place-one.component';

describe('PlaceOneComponent', () => {
  let component: PlaceOneComponent;
  let fixture: ComponentFixture<PlaceOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
