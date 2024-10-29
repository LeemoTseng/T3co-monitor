import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { itemAnimation } from '../../animation';
import { EventComponent } from '../event/event.component';
import { environment } from '../../environments/environment';


interface LogoItems {
  logo: string;
  link: string;
  title: string;
  subtitle: string;
}


@Component({
  selector: 'app-partners-and-members',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, EventComponent],
  templateUrl: './partners-and-members.component.html',
  animations:[itemAnimation]
})
export class PartnersAndMembersComponent {
  dynamicTitle: string = "Partners and Members"
  dynamicFooter: string = "Back to Home"
  dynamicLinkBackTo: string = "/home-menu"


  //logos
  logos: LogoItems[] = [
    {
      logo: "Taiwan digital nomad",
      link: `${environment.imgBaseUrl}partner-logo/logo-1.png`,
      title: "",
      subtitle: ""
    },    {
      logo: "AppWorks",
      link: `${environment.imgBaseUrl}partner-logo/logo-2.png`,
      title: "",
      subtitle: ""
    },
    {
      logo: "TCA",
      link: `${environment.imgBaseUrl}partner-logo/logo-3.png`,
      title: "",
      subtitle: ""
    },
    {
      logo: "CrossBond",
      link: `${environment.imgBaseUrl}partner-logo/CB-橫式彩.png`,
      title: "",
      subtitle: ""
    },
  ]



}
