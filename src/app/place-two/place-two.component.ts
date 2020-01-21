import { Component } from '@angular/core';

@Component({
  selector: 'app-place-two',
  templateUrl: './place-two.component.html',
  styleUrls: ['./place-two.component.scss'],
})
export class PlaceTwoComponent {
  assets = [
    {
      id: 1,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/1',
      related: ['asset 3', 'asset 4', 'asset 6'],
    },
    {
      id: 2,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/2',
      related: ['asset 3', 'asset 4'],
    },
    {
      id: 3,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/3',
      related: ['asset 1', 'asset 2'],
    },
    {
      id: 4,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/4',
      related: ['asset 1', 'asset 2'],
    },
    {
      id: 5,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/5',
      related: ['asset 6', 'asset 1'],
    },
    {
      id: 6,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/6',
      related: ['asset 5'],
    },
  ];
}
