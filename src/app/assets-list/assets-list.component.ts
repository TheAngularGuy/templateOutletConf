import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetsListComponent {
  @Input() list: { id: number; name: string; pic: string; desc: string; related: [] }[];
  @Input() ItemTemplate: TemplateRef<HTMLElement>;
}
