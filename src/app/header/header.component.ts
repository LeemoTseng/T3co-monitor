import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./header.component.html',
})
export class HeaderComponent {
  @Input() pageTitle:string = "Welcome to <br />Premiere New <br />Coworking Space.";
  @Input() pageTitleStyle:string="";
  @Input() isHomeMenu:boolean = true;

}
