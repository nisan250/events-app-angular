import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleWellComponent } from './collapsible-well.component';

describe('CollapsibleWellComponent', () => {
  let component: CollapsibleWellComponent;
  let fixture: ComponentFixture<CollapsibleWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
