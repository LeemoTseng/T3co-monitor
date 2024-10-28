import { Component, } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImgItems } from '../../interface/img-items';
import { EnlargeableImgGroupComponent } from '../../enlargeable-img-group/enlargeable-img-group.component';

@Component({
  selector: 'app-open-area',
  standalone: true,
  imports: [HeaderComponent, EnlargeableImgGroupComponent, FooterComponent],
  templateUrl: './open-area.component.html',
})
export class OpenAreaComponent {
  dynamicTitle: string = "Open Area";
  dynamicFooter: string = "Back to Space";
  dynamicLinkBackTo: string = "/space";

  openAreaImgs: ImgItems[] = [{
    imgUrl: '../../assets/space/Open Area/P1103389.jpg',
    name: "",
    descrioption: "",
    span: "col-span-2",
  },
  {
    imgUrl: '../../assets/space/Open Area/P1103438.png',
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: '../../assets/space/Open Area/P1103443.jpg',
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: '../../assets/space/Open Area/P1103446.jpg',
    name: "",
    descrioption: "",
    span: "col-span-2",

  }, {
    imgUrl: '../../assets/space/Open Area/P1103455.jpg',
    name: "",
    descrioption: "",
    span: "col-span-1",
  }, {
    imgUrl: '../../assets/space/Open Area/P1103466.jpg',
    name: "",
    descrioption: "",
    span: "col-span-1",

  }
    , {
    imgUrl: '../../assets/space/Open Area/P1103467.jpg',
    name: "",
    descrioption: "",
    span: "col-span-1",

  }

  ]
}
