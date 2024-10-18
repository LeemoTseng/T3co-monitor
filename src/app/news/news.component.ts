import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './news.component.html',
})
export class NewsComponent {
    dynamicTitle:string = "News";
    dynamicFooter:string = "Back to Home";
    


}
