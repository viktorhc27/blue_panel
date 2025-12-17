import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpAlertsCard } from './bp-alerts-card';

describe('BpAlertsCard', () => {
  let component: BpAlertsCard;
  let fixture: ComponentFixture<BpAlertsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpAlertsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpAlertsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
