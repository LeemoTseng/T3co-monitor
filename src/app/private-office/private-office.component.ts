import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { ListItems } from '../interface/list-items';
import { ImgItems } from '../interface/img-items';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-private-office',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './private-office.component.html',
  animations: [
    trigger('enlargeAnimation', [
      state('void', style({ opacity: 0,})),
      //void: an element that is not currently in the DOM.
      state('*', style({ opacity: 1,})),
      //wildcard * :matches any state other than 'void'.
      transition(':enter', [
        animate('150ms ease-out')
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ]),
    ])
  ]
})

export class PrivateOfficeComponent {
  dynamicTitle: string = "Private Office";
  dynamicFooter: string = "Back to Space";

  isEnlarged: boolean = false;
  selectedImage: ImgItems | null = null;


  privateOfficelistItems: ListItems[] = [
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
  privateOfficeImg: ImgItems[] = [{
    imgUrl: 'https://picsum.photos/2100/900',
    name: "title",
    descrioption: "description",
    span: "col-span-2",
  },
  {
    imgUrl: 'https://picsum.photos/600/2100',
    name: "title",
    descrioption: "description",
    span: "col-span-1",
  },
  {
    imgUrl: 'https://picsum.photos/600/402',
    name: "title",
    descrioption: "description",
    span: "row-span-2",
  },
  {
    imgUrl: 'https://picsum.photos/600/402',
    name: "title",
    descrioption: "description",
    span: "col-span-2",

  }, {
    imgUrl: 'https://picsum.photos/600/402',
    name: "title",
    descrioption: "description",
    span: "col-span-1",
  }, {
    imgUrl: 'https://picsum.photos/600/402',
    name: "title",
    descrioption: "description",
    span: "col-span-1",

  }

  ]

  enlargeImg(item: ImgItems) {
    this.selectedImage = item;
    this.isEnlarged = true;
  }
  closeEnlarged(){
    this.isEnlarged = false;
  }

}
