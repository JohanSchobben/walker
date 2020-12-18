import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPointComponent } from './sprint-point.component';

describe('SprintPointComponent', () => {
  let component: SprintPointComponent;
  let fixture: ComponentFixture<SprintPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
