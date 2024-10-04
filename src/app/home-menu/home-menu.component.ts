import { Component } from '@angular/core';
import { MenuItems } from '../menu-items';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [CommonModule,MatRippleModule],
  templateUrl: './home-menu.component.html',
  styleUrl: './home-menu.component.css'
})
export class HomeMenuComponent {
  rippleColor: string = 'rgba(255, 255, 255, 0.3)';
  menuItems: MenuItems[] = [
    {
      name:'space',
      imgUrl:'https://picsum.photos/600/400',
      linkTo: '#',
      colSpan: '4'
    },
    {
      name:'plan',
      imgUrl:'https://picsum.photos/600/401',
      linkTo: '#',
      colSpan: '2'
    },
    {
      name:'PARTNER & MEMBER',
      imgUrl:'https://picsum.photos/600/402',
      linkTo: '#',
      colSpan: '2'
    },
        {
      name:'news',
      imgUrl:'https://picsum.photos/600/405',
      linkTo: '#',
      colSpan: '3'
    },
        {
      name:'quiz',
      imgUrl:'https://picsum.photos/600/403',
      linkTo: '#',
      colSpan: '1'
    }
  ];


}
