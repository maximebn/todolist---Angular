import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffacerDialogComponentComponent } from './effacer-dialog-component.component';

describe('EffacerDialogComponentComponent', () => {
  let component: EffacerDialogComponentComponent;
  let fixture: ComponentFixture<EffacerDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffacerDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffacerDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
