import { Component } from '@angular/core';

import { ASSETS } from '../../constants/assets.constant';

@Component({
  selector: 'app-place-one',
  templateUrl: './place-one.component.html',
  styleUrls: ['./place-one.component.scss'],
})
export class PlaceOneComponent {
  assets = ASSETS;

  calculus(x: number) {
    return (x * x) / 1.0001;
  }
}
