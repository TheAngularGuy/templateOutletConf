import { Component, Input } from '@angular/core';
import { Asset } from 'src/app/models/asset.model';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
})
export class AssetsListComponent {
  @Input() list: Asset[];
  @Input() IQEAfn: () => number;
  @Input() displayRelated: boolean;

  diplayedRelated: { [key: number]: boolean } = {};

  toggleDisplayedRelatedItems(id: number) {
    if (!this.displayRelated) {
      return;
    }
    this.diplayedRelated[id] = !this.diplayedRelated[id];
  }
}
