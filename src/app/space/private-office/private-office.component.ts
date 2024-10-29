import { Component,  } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImgItems } from '../../interface/img-items';
import { EnlargeableImgGroupComponent } from '../../enlargeable-img-group/enlargeable-img-group.component';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-private-office',
  standalone: true,
  imports: [ HeaderComponent, HeaderComponent, FooterComponent, EnlargeableImgGroupComponent],
  templateUrl: './private-office.component.html',

})

export class PrivateOfficeComponent {
  dynamicTitle: string = "Private Office";
  dynamicFooter: string = "Back to Space";
  dynamicLinkBackTo: string = `${environment.linkBaseUrl}/space`;

  privateOfficeImgs: ImgItems[] = [{
    imgUrl: `${environment.imgBaseUrl}space/Private-office/0923_4.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-2",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Private-office/P1103405.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Private-office/P1103588-HDR.png`,
    name: "",
    descrioption: "",
    span: "row-span-2",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Private-office/P1103590.png`,
    name: "",
    descrioption: "",
    span: "col-span-1",

  },  {
    imgUrl: `${environment.imgBaseUrl}space/Private-office/S__219357186_0.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-1",

  }, {
    imgUrl: `${environment.imgBaseUrl}space/Private-office/P1103592-HDR.png`,
    name: "",
    descrioption: "",
    span: "col-span-1",
  }, {
    imgUrl: `${environment.imgBaseUrl}space/Private-office/P1103594-HDR.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-1",

  }

  ]



}
