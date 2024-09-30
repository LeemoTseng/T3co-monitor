import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monitor-1080x1920';
}
