import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpButton } from './bp-button';

describe('BpButton', () => {
  let component: BpButton;
  let fixture: ComponentFixture<BpButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
