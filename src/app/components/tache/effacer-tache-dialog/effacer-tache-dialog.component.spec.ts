import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffacerTacheDialogComponent } from './effacer-tache-dialog.component';

describe('EffacerTacheDialogComponent', () => {
  let component: EffacerTacheDialogComponent;
  let fixture: ComponentFixture<EffacerTacheDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffacerTacheDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffacerTacheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
