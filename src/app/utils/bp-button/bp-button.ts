import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bp-button.html',
  styleUrl: './bp-button.css',
})
export class BpButton {
  @Input() text = '';

  @Input() type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link' = 'primary';

  @Input() soft = false;
  @Input() outline = false;
  @Input() gradient = false;

  @Input() iconBtn = false;
  @Input() shadow = false;
  @Input() disabled = false;
  @Input() loading = false;

  @Input() large = false;
  @Input() small = false;

  @Input() iconBp?: string;
  @Input() iconFa?: string;

  @Output() action = new EventEmitter<void>();


  get variantClass(): string {
    if (this.gradient) {
      return `btn-gradient-${this.type}`;
    }

    if (this.outline) {
      return `btn-outline-${this.type}`;
    }

    if (this.soft) {
      return `btn-soft-${this.type}`;
    }

    return `btn-${this.type}`;
  }

  onAction() {
    if (this.disabled || this.loading) return;
    this.action.emit();
  }
}
