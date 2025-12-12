import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() toggle = false
logout() {
  console.log("Cerrando sesión...");
  // Aquí pones tu lógica: limpiar token, navegar, etc.
}

}
