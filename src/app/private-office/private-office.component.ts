import { Component,  } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ImgItems } from '../interface/img-items';
import { EnlargeableImgGroupComponent } from '../enlargeable-img-group/enlargeable-img-group.component';


@Component({
  selector: 'app-private-office',
  standalone: true,
  imports: [ HeaderComponent, HeaderComponent, FooterComponent, EnlargeableImgGroupComponent],
  templateUrl: './private-office.component.html',

})

export class PrivateOfficeComponent {
  dynamicTitle: string = "Private Office";
  dynamicFooter: string = "Back to Space";
  dynamicLinkBackTo: string = "/space";

  privateOfficeImgs: ImgItems[] = [{
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