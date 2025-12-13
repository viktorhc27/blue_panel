import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sidebarCollapsed = false;
  grupoOpen = false;
  @Output() toggleChange = new EventEmitter<boolean>()

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.toggleChange.emit(this.sidebarCollapsed);
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (window.innerWidth < 768) {
      this.sidebarCollapsed = true
    } else {
      this.sidebarCollapsed = false
    }
    this.toggleChange.emit(this.sidebarCollapsed);
  }
}
