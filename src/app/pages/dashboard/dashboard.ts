import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  cards = [
    { label: 'Usuarios activos', value: '1,248' },
    { label: 'Ventas del día', value: '$4,395' },
    { label: 'Nuevos registros', value: '35' },
    { label: 'Tasa de conversión', value: '4.8%' },
  ];

  usuarios = [
    { nombre: 'Renata M.', rol: 'Admin', estado: 'Activo' },
    { nombre: 'Ariel N.', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'Leandro H.', rol: 'Usuario', estado: 'Activo' },
  ];

}
