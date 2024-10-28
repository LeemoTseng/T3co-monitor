import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { itemAnimation, showUpAnimation } from '../../animation';
import { EventComponent } from '../event/event.component';


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
      link: "../../assets/partner-logo/logo.png-1.png",
      title: "",
      subtitle: ""
    },    {
      logo: "AppWorks",
      link: "../../assets/partner-logo/logo.png-2.png",
      title: "",
      subtitle: ""
    },
    {
      logo: "TCA",
      link: "../../assets/partner-logo/logo.png-3.png",
      title: "",
      subtitle: ""
    },
    {
      logo: "CrossBond",
      link: "../../assets/partner-logo/CB 橫式彩.png",
      title: "",
      subtitle: ""
    },
  ]



}
