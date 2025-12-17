import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bp-alerts',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './bp-alerts.html',
  styleUrl: './bp-alerts.css',
})
export class BpAlerts {
  @Input() type:
    'primary' | 'secondary' | 'success' | 'danger' |
    'warning' | 'info' | 'dark' | 'light'|'link' = 'primary';

  @Input() text!: string;
  @Input() title?: string;

  @Input() iconBp?: string;   // bootstrap icon (sin "bi-")
  @Input() iconFa?: string;   // fontawesome (sin "fa-")

  @Input() dismissible = false;
  @Input() small = false;
  @Input() border = false;

  @Input() actionText?: string;
  @Output() action = new EventEmitter<void>();

  closed = false;

  close() {
    this.closed = true;
  }

  onAction() {     
    this.action.emit();
  }
}
