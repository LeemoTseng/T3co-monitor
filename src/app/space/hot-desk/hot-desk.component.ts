import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { EnlargeableImgGroupComponent } from "../../enlargeable-img-group/enlargeable-img-group.component";
import { ImgItems } from '../../interface/img-items';

@Component({
  selector: 'app-hot-desk',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EnlargeableImgGroupComponent],
  templateUrl: './hot-desk.component.html',
})
export class HotDeskComponent {

  dynamicTitle:string = "Hot Desk";
  dynamicFooter:string = "Back to Space";
  dynamicLinkBackTo:string = "/space";

    hotDeskImgs: ImgItems[] = [{
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

}
