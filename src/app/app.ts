import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BluePanel');
  sidebarState = false;

  onSidebarToggle(newState: boolean) {
    this.sidebarState = newState
  }
}
