import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  cards = [
    { label: 'Usuarios', value: 1280, icon: 'bi-people' },
    { label: 'Ventas', value: '$ 9.540', icon: 'bi-currency-dollar' },
    { label: 'Reportes', value: 42, icon: 'bi-file-earmark-text' },
    { label: 'Errores', value: 3, icon: 'bi-bug' }
  ];

  usuarios = [
    { nombre: 'Juan Pérez', rol: 'Admin', estado: 'Activo' },
    { nombre: 'María López', rol: 'Editor', estado: 'Activo' },
    { nombre: 'Carlos Díaz', rol: 'Viewer', estado: 'Inactivo' }
  ];
  ngAfterViewInit() {
    /* AREA */
    new Chart('areaChart', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Users',
          data: [120, 150, 180, 170, 200, 230, 210],
          borderColor: '#f97316',
          backgroundColor: 'rgba(249,115,22,.2)',
          fill: true,
          tension: .4
        }]
      }
    });

    /* RADAR */
    new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: ['Speed', 'Quality', 'UX', 'Support', 'Security'],
        datasets: [{
          label: 'Score',
          data: [80, 90, 85, 75, 95],
          backgroundColor: 'rgba(30,99,233,.2)',
          borderColor: '#1e63e9'
        }]
      }
    });

  }


}
