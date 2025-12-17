import { Component } from '@angular/core';
import { BpAlerts } from '../../utils/bp-alerts/bp-alerts';
import { BpAlertsCard } from '../../utils/bp-alerts-card/bp-alerts-card';

@Component({
  selector: 'app-alerts',
  imports: [BpAlerts,BpAlertsCard],
  standalone: true,
  templateUrl: './alerts.html',
  styleUrl: './alerts.css',
})
export class Alerts {

}
