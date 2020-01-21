import { Component } from '@angular/core';

@Component({
  selector: 'app-place-one',
  templateUrl: './place-one.component.html',
  styleUrls: ['./place-one.component.scss'],
})
export class PlaceOneComponent {
  assets = [
    {
      id: 1,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/1',
    },
    {
      id: 2,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/2',
    },
    {
      id: 3,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/3',
    },
    {
      id: 4,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/4',
    },
    {
      id: 5,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/5',
    },
    {
      id: 6,
      name: 'asset',
      pic: 'https://api.adorable.io/avatars/285/6',
    },
  ];

  calculus(x) {
    return (x * x) / 1.0001;
  }
}
