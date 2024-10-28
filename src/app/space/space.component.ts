import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MatRippleModule } from '@angular/material/core';

import { itemAnimation, showUpAnimation } from '../../animation';
import { EventComponent } from '../event/event.component';

interface SpaceItems {
  name: string;
  linkTo: string;
  colSpan: string;
  rowSpan: string;
  imgUrl: string;
}

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, MatRippleModule, FooterComponent, EventComponent],
  templateUrl: './space.component.html',
  animations: [showUpAnimation,itemAnimation]
})

export class SpaceComponent {
  dynamicTitle: string = "Space";
  dynamicFooter: string = "Back to Home";
  subIsHomeMenu: boolean = false;

  rippleColor: string = 'rgba(255, 255, 255, 0.3)';
  radius: number = 500;


  spaceItems: SpaceItems[] = [{
    name: 'Private Office',
    linkTo: '/space/private-office',
    imgUrl: '../../assets/space/Private-office-縮圖.png',
    colSpan: "",
    rowSpan: "row-span-2",
  },
  {
    name: 'Hot Desk',
    linkTo: '/space/hot-desk',
    colSpan: "col-span-1",
    rowSpan: "",
    imgUrl: '../../assets/space/Hot Desk 縮圖.jpg',
  },
  {
    name: 'Open Area',
    linkTo: '/space/open-area',
    colSpan: "col-span-1",
    rowSpan: "",
    imgUrl: '../../assets/space/Open-Area-縮圖.png',
  }, {
    name: 'Meeting Room',
    linkTo: '/space/meeting-room',
    colSpan: "col-span-2",
    rowSpan: "",
    imgUrl: '../../assets/space/Meeting Room 縮圖.jpg',
  }]

}
