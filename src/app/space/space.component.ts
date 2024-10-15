import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MatRippleModule } from '@angular/material/core';

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
  imports: [CommonModule, HeaderComponent, RouterModule, MatRippleModule, FooterComponent],
  templateUrl: './space.component.html',
})

export class SpaceComponent {
  dynamicTitle: string = "Space";
  dynamicFooter: string = "Back to Home";
  subIsHomeMenu: boolean = false;

  rippleColor: string = 'rgba(255, 255, 255, 0.3)';

  spaceItems: SpaceItems[] = [{
    name: 'Private Office',
    linkTo: '/space/private-office',
    imgUrl: 'https://picsum.photos/600/400',
    colSpan: "",
    rowSpan: "row-span-2",
  },
  {
    name: 'Hot Desk',
    linkTo: '/space/hot-desk',
    colSpan: "col-span-1",
    rowSpan: "",
    imgUrl: 'https://picsum.photos/600/401',

  },
  {
    name: 'Open Area',
    linkTo: '/space/private-office',
    colSpan: "col-span-1",
    rowSpan: "",
    imgUrl: 'https://picsum.photos/600/402',

  }, {
    name: 'Meeting Room',
    linkTo: '/space/meeting-room',
    colSpan: "col-span-2",
    rowSpan: "",
    imgUrl: 'https://picsum.photos/600/403',

  }]

}
