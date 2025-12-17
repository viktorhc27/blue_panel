import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bp-alerts-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './bp-alerts-card.html',
  styleUrl: './bp-alerts-card.css',
})
export class BpAlertsCard {
  @Input() title!: string;
  @Input() subtitle?: string;

  // primary | success | warning | danger | info | secondary | dark | light
  @Input() type: string = 'primary';

  // Bootstrap icon name SIN "bi-"
  @Input() icon!: string;

  // tamaño del icono circular
  @Input() size: number = 40;
}
