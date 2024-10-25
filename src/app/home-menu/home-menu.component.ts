import { Component } from '@angular/core';
import { MenuItems } from '../interface/menu-items';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatRippleModule, RouterModule],
  templateUrl: './home-menu.component.html',
  animations: [
    trigger('showUpAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [animate('150ms ease-out')]),
      transition(':leave', [animate('150ms ease-in', style({ opacity: 0 }))]),
    ])
  ]
})
export class HomeMenuComponent {
  dynamicTitle: string = "Welcome to <br />Premiere New <br />Coworking Space.";
  rippleColor: string = 'rgba(255, 255, 255, 0.2)';
  radius: number = 500;

  isOpened: boolean = false;

  showMenu() {
    this.isOpened = !this.isOpened;
  }

  menuItems: MenuItems[] = [
    {
      name: 'space',
      imgUrl: 'https://picsum.photos/600/400',
      linkTo: '/space',
      colSpan: 'col-span-4'
    },
    {
      name: 'plan',
      imgUrl: 'https://picsum.photos/600/401',
      linkTo: '/plan',
      colSpan: 'col-span-2'
    },
    {
      name: 'PARTNER & MEMBER',
      imgUrl: 'https://picsum.photos/600/402',
      linkTo: '/partners-and-members',
      colSpan: 'col-span-2'
    },
    {
      name: 'news',
      imgUrl: 'https://picsum.photos/600/405',
      linkTo: '/news',
      colSpan: 'col-span-3'
    },
    {
      name: 'quiz',
      imgUrl: 'https://picsum.photos/600/403',
      linkTo: '/quiz',
      colSpan: 'col-span-1'
    }
  ];


}
