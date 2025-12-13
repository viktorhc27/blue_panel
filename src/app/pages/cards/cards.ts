import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],

  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {

}
