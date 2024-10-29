import { Component } from '@angular/core';
import { MenuItems } from '../interface/menu-items';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { HeaderComponent } from '../header/header.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EventComponent } from '../event/event.component';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatRippleModule, EventComponent, RouterModule],
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
  
  logImg=`${environment.imgBaseUrl}logo.png`
  videoImg=`${environment.imgBaseUrl}T3Co-For-Web-30sec-720p.mp4`

  isOpened: boolean = false;

  showMenu() {
    this.isOpened = !this.isOpened;
  }

  menuItems: MenuItems[] = [
    {
      name: 'space',
      imgUrl: '',
      linkTo:  `/space`,
      colSpan: 'col-span-4'
    },
    {
      name: 'plan',
      imgUrl: '',
      linkTo: `/plan`,
      colSpan: 'col-span-2'
    },
    {
      name: 'PARTNER & MEMBER',
      imgUrl: '',
      linkTo: `/partners-and-members`,
      colSpan: 'col-span-2'
    },
    {
      name: 'news',
      imgUrl: '',
      linkTo: `/news`,
      colSpan: 'col-span-3'
    },
    {
      name: 'quiz',
      imgUrl: '',
      linkTo: `/quiz`,
      colSpan: 'col-span-1'
    }
  ];


}
