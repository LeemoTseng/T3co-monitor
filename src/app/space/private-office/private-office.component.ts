import { Component,  } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImgItems } from '../../interface/img-items';
import { EnlargeableImgGroupComponent } from '../../enlargeable-img-group/enlargeable-img-group.component';


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
    imgUrl: '../../assets/space/Private-office/0923_4.jpg',
    name: "",
    descrioption: "",
    span: "col-span-2",
  },
  {
    imgUrl: '../../assets/space/Private-office/P1103405.jpg',
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: '../../assets/space/Private-office/P1103588-HDR.png',
    name: "",
    descrioption: "",
    span: "row-span-2",
  },
  {
    imgUrl: '../../assets/space/Private-office/P1103590.png',
    name: "",
    descrioption: "",
    span: "col-span-1",

  },  {
    imgUrl: '../../assets/space/Private-office/S__219357186_0.jpg',
    name: "",
    descrioption: "",
    span: "col-span-1",

  }, {
    imgUrl: '../../assets/space/Private-office/P1103592-HDR.png',
    name: "",
    descrioption: "",
    span: "col-span-1",
  }, {
    imgUrl: '../../assets/space/Private-office/P1103594-HDR.jpg',
    name: "",
    descrioption: "",
    span: "col-span-1",

  }

  ]



}
