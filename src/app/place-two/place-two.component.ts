import { Component } from '@angular/core';

import { ASSETS } from '../constants/assets.constant';

@Component({
  selector: 'app-place-two',
  templateUrl: './place-two.component.html',
  styleUrls: ['./place-two.component.scss'],
})
export class PlaceTwoComponent {
  assets = ASSETS;
  hash: { [key: number]: boolean } = {};

  toggleDisplayedRelatedItems(id: number) {
    this.hash[id] = !this.hash[id];
  }
}
