import { Component, Input } from '@angular/core';
import { ImgItems } from '../interface/img-items';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { itemAnimation, showUpAnimation } from '../../animation';
import { MatRippleModule } from '@angular/material/core';


@Component({
  selector: 'app-enlargeable-img-group',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  templateUrl: './enlargeable-img-group.component.html',
  animations: [
    trigger('enlargeAnimation', [
      state('void', style({ opacity: 0 })), // 'void' means the element is not in the DOM
      state('*', style({ opacity: 1 })), // '*' means any state
      transition(':enter', [animate('150ms ease-out')]),  // void => * (entering):enter means the element is added to the DOM
      transition(':leave', [animate('150ms ease-in', style({ opacity: 0 }))]),
    ]),itemAnimation, showUpAnimation
  ]
})
export class EnlargeableImgGroupComponent {
  @Input() images: ImgItems[] = [];



  // privateOfficelistItems: ListItems[] = [
  //   {
  //     list: "Shared seating",
  //     icon: true
  //   },
  //   {
  //     list: "24/7 access",
  //     icon: true
  //   },
  //   {
  //     list: "Complimentary coffee, beverages",
  //     icon: true
  //   },
  //   {
  //     list: "Fully-equipped meeting rooms and high speed internet",
  //     icon: true
  //   },
  //   {
  //     list: "Full event access",
  //     icon: true
  //   },


  // ]

  rippleColor = "rgba(0, 0, 0, 0.3)";
  radius= 500;

  isEnlarged: boolean = false;
  selectedImage: ImgItems | null = null;

  enlargeImg(item: ImgItems) {
    this.selectedImage = item;
    this.isEnlarged = true;
  }

  closeEnlarged() {
    this.isEnlarged = false;
  }
}
