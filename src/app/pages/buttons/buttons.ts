import { Component } from '@angular/core';
import { BpButton } from '../../utils/bp-button/bp-button';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [BpButton],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {

}
