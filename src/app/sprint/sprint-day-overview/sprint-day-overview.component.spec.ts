import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintDayOverviewComponent } from './sprint-day-overview.component';

describe('SprintDayOverviewComponent', () => {
  let component: SprintDayOverviewComponent;
  let fixture: ComponentFixture<SprintDayOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintDayOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintDayOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
