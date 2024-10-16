import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-partners-and-members',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './partners-and-members.component.html',
})
export class PartnersAndMembersComponent {
  dynamicTitle:string = "Partners and Members"
  dynamicFooter:string = "Back to Home"
  dynamicLinkBackTo:string = "/home-menu"
}
