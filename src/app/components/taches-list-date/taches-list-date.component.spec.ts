import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesListDateComponent } from './taches-list-date.component';

describe('TachesListDateComponent', () => {
  let component: TachesListDateComponent;
  let fixture: ComponentFixture<TachesListDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachesListDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesListDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
