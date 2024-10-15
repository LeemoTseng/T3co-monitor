import { Component } from '@angular/core';
import { MenuItems } from '../menu-items';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [HeaderComponent,CommonModule,MatRippleModule,RouterModule],
  templateUrl: './home-menu.component.html',
})
export class HomeMenuComponent {
  dynamicTitle:string = "Welcome to <br />Premiere New <br />Coworking Space.";
  rippleColor: string = 'rgba(255, 255, 255, 0.3)';
  menuItems: MenuItems[] = [
    {
      name:'space',
      imgUrl:'https://picsum.photos/600/400',
      linkTo: '/space',
      colSpan: 'col-span-4'
    },
    {
      name:'plan',
      imgUrl:'https://picsum.photos/600/401',
      linkTo: '#',
      colSpan: 'col-span-2'
    },
    {
      name:'PARTNER & MEMBER',
      imgUrl:'https://picsum.photos/600/402',
      linkTo: '#',
      colSpan: 'col-span-2'
    },
        {
      name:'news',
      imgUrl:'https://picsum.photos/600/405',
      linkTo: '#',
      colSpan: 'col-span-3'
    },
        {
      name:'quiz',
      imgUrl:'https://picsum.photos/600/403',
      linkTo: '#',
      colSpan: 'col-span-1'
    }
  ];


}
