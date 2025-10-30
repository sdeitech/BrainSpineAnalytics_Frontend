import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBIInsightsComponent } from './tbi-insights.component';

describe('TBIInsightsComponent', () => {
  let component: TBIInsightsComponent;
  let fixture: ComponentFixture<TBIInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TBIInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TBIInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
