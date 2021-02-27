import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  menus = [
    {
      src: '',
      label: 'Home',
      auth: true,
      url: '/'
    },
    {
      src: '',
      label: 'Explore',
      auth: true
    },
    {
      src: '',
      label: 'Tags',
      auth: true
    },
    {
      src: '',
      label: 'Bookmark',
      auth: true
    }
  ]

  ngOnInit(): void {
  }

}
