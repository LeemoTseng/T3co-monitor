import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { EnlargeableImgGroupComponent } from "../../enlargeable-img-group/enlargeable-img-group.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImgItems } from '../../interface/img-items';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-meeting-room',
  standalone: true,
  imports: [HeaderComponent, EnlargeableImgGroupComponent, FooterComponent],
  templateUrl: './meeting-room.component.html',
})
export class MeetingRoomComponent {
  dynamicTitle: string = "Meeting Room";
  dynamicFooter: string = "Back to Space";
  dynamicLinkBackTo: string = `${environment.linkBaseUrl}/space`;

  meetingRoomImgs: ImgItems[] = [{

    imgUrl: `${environment.imgBaseUrl}space/Meeting-Room/P1103412.jpg`,
    name: "",
    descrioption: "",
    span: "col-span-3",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Meeting-Room/P1103415.jpg`,
    name: "",
    descrioption: "",
    span: "row-span-2",
  },
  {
    imgUrl: `${environment.imgBaseUrl}space/Meeting-Room/P1103448.jpg`,
    name: "",
    descrioption: "",
    span: "row-span-2 col-span-2",
  },
  ]

}
