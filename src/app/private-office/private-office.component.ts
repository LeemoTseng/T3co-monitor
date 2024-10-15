import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { ListItem } from '../list-item';


@Component({
  selector: 'app-private-office',
  standalone: true,
  imports: [CommonModule,HeaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './private-office.component.html',
})

export class PrivateOfficeComponent {
  dynamicTitle: string = "Private Office";
  TitleStyle: string = "text-white drop-shadow-xl";
  dynamicFooter: string = "Back to Space";
  subIsHomeMenu: boolean = false;

  privateOfficelistItems: ListItem[] = [
    {
      list: "Shared seating",
      icon: true
    },
    {
      list: "24/7 access",
      icon: true
    },
    {
      list: "Complimentary coffee, beverages",
      icon: true
    },
    {
      list: "Fully-equipped meeting rooms and high speed internet",
      icon: true
    },
    {
      list: "Full event access",
      icon: true
    },











  ]
}
