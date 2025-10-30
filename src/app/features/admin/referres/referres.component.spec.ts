import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferresComponent } from './referres.component';

describe('ReferresComponent', () => {
  let component: ReferresComponent;
  let fixture: ComponentFixture<ReferresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
