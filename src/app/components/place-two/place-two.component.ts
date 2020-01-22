import { Component } from '@angular/core';

import { ASSETS } from '../../constants/assets.constant';

@Component({
  selector: 'app-place-two',
  templateUrl: './place-two.component.html',
  styleUrls: ['./place-two.component.scss'],
})
export class PlaceTwoComponent {
  assets = ASSETS;
}
