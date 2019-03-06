import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesListProjetComponent } from './taches-list-projet.component';

describe('TachesListProjetComponent', () => {
  let component: TachesListProjetComponent;
  let fixture: ComponentFixture<TachesListProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachesListProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesListProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
