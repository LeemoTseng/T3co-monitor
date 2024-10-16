import { Component,  } from '@angular/core';
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
    imgUrl: 'https://picsum.photos/210/900',
    name: "title",
    descrioption: "description",
    span: "col-span-2",
  },
  {
    imgUrl: 'https://picsum.photos/600/210',
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
