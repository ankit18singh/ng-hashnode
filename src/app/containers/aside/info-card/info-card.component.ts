import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  menus = [
    {label: 'About'},
    {label: 'Official Blog'},
    {label: 'Ambassador'},
    {label: 'Site Status'},
    {label: 'Hashnode APIs'},
    {label: 'Careers'},
    {label: 'Media'},
    {label: 'Term'},
    {label: 'Privacy'},
    {label: 'Support'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
