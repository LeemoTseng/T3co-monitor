import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { EnlargeableImgGroupComponent } from "../../enlargeable-img-group/enlargeable-img-group.component";
import { ImgItems } from '../../interface/img-items';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-hot-desk',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EnlargeableImgGroupComponent],
  templateUrl: './hot-desk.component.html',
})
export class HotDeskComponent {

  dynamicTitle:string = "Hot Desk";
  dynamicFooter:string = "Back to Space";
  dynamicLinkBackTo:string = `${environment.linkBaseUrl}/space`;
    hotDeskImgs: ImgItems[] = [{
    imgUrl: `${environment.imgBaseUrl}space/Hot-Desk/booth-desk_1.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-2",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Hot-Desk/booth-desk_2.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-1",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Hot-Desk/Hot-Desk.png`,
    name: "",
    descrioption: "",
    span: "row-span-2",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Hot-Desk/P1103385.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-2",

  }, {
    imgUrl: `${environment.imgBaseUrl}space/Hot-Desk/P1103465.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-2",
  }, 
  ]

}
