import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MatRippleModule } from '@angular/material/core';

import { itemAnimation, showUpAnimation } from '../../animation';
import { EventComponent } from '../event/event.component';

import { environment } from '../../environments/environment';
import { filter } from 'rxjs';

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
export class SpaceComponent implements OnInit {
  dynamicTitle: string = "Space";
  dynamicFooter: string = "Back to Home";
  subIsHomeMenu: boolean = false;

  rippleColor: string = 'rgba(255, 255, 255, 0.3)';
  radius: number = 500;
  isChildRouteActive = false;

  spaceItems: SpaceItems[] = [
    {
      name: 'Private Office',
      linkTo: 'private-office',
      imgUrl: `${environment.imgBaseUrl}space/Private-office-thumbnail.png`,
      colSpan: "",
      rowSpan: "row-span-2",
    },
    {
      name: 'Hot Desk',
      linkTo: 'hot-desk',
      colSpan: "col-span-1",
      rowSpan: "",
      imgUrl: `${environment.imgBaseUrl}space/Hot-Desk-thunbnail.jpg`,
    },
    {
      name: 'Open Area',
      linkTo: 'open-area',
      colSpan: "col-span-1",
      rowSpan: "",
      imgUrl: `${environment.imgBaseUrl}space/Open-Area-thumbnail.png`,
    },
    {
      name: 'Meeting Room',
      linkTo: 'meeting-room',
      colSpan: "col-span-2",
      rowSpan: "",
      imgUrl: `${environment.imgBaseUrl}space/Meeting-Room-thumbnail.jpg`,
    }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // 監聽路由變化以判斷是否為子路徑
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isChildRouteActive = !!this.route.firstChild;
      });
  }
}