import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelehealthComponent } from './telehealth.component';

describe('TelehealthComponent', () => {
  let component: TelehealthComponent;
  let fixture: ComponentFixture<TelehealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelehealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelehealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
