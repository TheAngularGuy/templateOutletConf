import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTwoComponent } from './place-two.component';

describe('PlaceTwoComponent', () => {
  let component: PlaceTwoComponent;
  let fixture: ComponentFixture<PlaceTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
