import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.scss'
})
export class AnimationComponent {

}
