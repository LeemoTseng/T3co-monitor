
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl:'./header.component.html',
})
export class HeaderComponent {
  @Input() pageTitle:string = "Welcome to <br />Premiere New <br />Coworking Space.";
  @Input() pageTitleStyle:string="";
  @Input() isHomeMenu:boolean = true;

}
