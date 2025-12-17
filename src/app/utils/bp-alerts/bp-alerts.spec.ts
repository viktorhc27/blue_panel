import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpAlerts } from './bp-alerts';

describe('BpAlerts', () => {
  let component: BpAlerts;
  let fixture: ComponentFixture<BpAlerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpAlerts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpAlerts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
