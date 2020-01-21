import { Component } from '@angular/core';

import { ASSET } from '../constants/assets.constant';

@Component({
  selector: 'app-place-one',
  templateUrl: './place-one.component.html',
  styleUrls: ['./place-one.component.scss'],
})
export class PlaceOneComponent {
  assets = ASSET;

  calculus(x: number) {
    return (x * x) / 1.0001;
  }
}
