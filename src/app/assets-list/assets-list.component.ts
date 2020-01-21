import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetsListComponent {
  @Input() list: { id: number; name: string; pic: string; desc: string; related: [] }[];
  @Input() IQEAfn: () => number;
  @Input() displayRelated: boolean;

  diplayedRelated: { [key: string]: boolean } = {};

  toggleDisplayedRelatedItems(id: number) {
    if (!this.displayRelated) {
      return;
    }
    this.diplayedRelated[id] = !this.diplayedRelated[id];
  }
}
