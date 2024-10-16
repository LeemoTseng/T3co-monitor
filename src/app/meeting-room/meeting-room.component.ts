import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { EnlargeableImgGroupComponent } from "../enlargeable-img-group/enlargeable-img-group.component";
import { FooterComponent } from "../footer/footer.component";
import { ImgItems } from '../interface/img-items';

@Component({
  selector: 'app-meeting-room',
  standalone: true,
  imports: [HeaderComponent, EnlargeableImgGroupComponent, FooterComponent],
  templateUrl: './meeting-room.component.html',
})
export class MeetingRoomComponent {
  dynamicTitle: string = "Meeting Room";
  dynamicFooter: string = "Back to Space";
  dynamicLinkBackTo: string = "/space";

  meetingRoomImgs: ImgItems[] = [{

    imgUrl: 'https://picsum.photos/600/402',
    name: "title",
    descrioption: "description",
    span: "col-span-2",
  },
  {
    imgUrl: 'https://picsum.photos/600/402',
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
