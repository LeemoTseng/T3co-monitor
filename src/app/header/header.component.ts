import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string = "Welcome to <br />Premiere New <br />Coworking Space.";
}
