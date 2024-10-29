
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment';

interface iconSet{
  name: string,
  link: string,
  style: string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input()pageFooter:string = "Back to Home"
  @Input()pageLinkBackTo:string = `${environment.linkBaseUrl}/home`
  @Input()footerStyle:string = ""

  isStyle: boolean = true

  // iconSets: iconSet[] = [{
  //   name:"home",
  //   link:"/home-menu",

  // }]
  
}
