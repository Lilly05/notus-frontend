import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/temperatur', title: 'Temperatur',  icon:'library_books', class: '' },
    { path: '/luftfeuchtigkeit', title: 'Luftfeuchtigkeit',  icon:'bubble_chart', class: '' },
    { path: '/luftdruck', title: 'Luftdruck',  icon:'location_on', class: '' },
    { path: '/luftqualitaet', title: 'Luftqualität',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
