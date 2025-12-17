import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-charts',
  imports: [],
  standalone: true,
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts {
  ngAfterViewInit() {

    /* LINE */
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [1200, 1900, 1700, 2200, 2600],
          borderColor: '#1e63e9',
          backgroundColor: 'rgba(30,99,233,.15)',
          fill: true,
          tension: .4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });

    /* DOUGHNUT */
    new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Direct', 'Ads', 'Social'],
        datasets: [{
          data: [45, 30, 25],
          backgroundColor: ['#1e63e9', '#22c55e', '#facc15']
        }]
      }
    });

    /* BAR */
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Revenue',
          data: [800, 1200, 1000, 1500, 1800],
          backgroundColor: '#22c55e',
          borderRadius: 6
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    });

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