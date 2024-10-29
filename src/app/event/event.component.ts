import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './event.component.html',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('0.5s ease-out')), // 4秒內淡出
      transition('out => in', animate('0.5s ease-in')) // 0.5秒內淡入
    ]),
    trigger('scaleAnimation', [
      transition('* => *', [
        animate(
          '0.6s ease-in-out',
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.1)', offset: 0.1 }),
            style({ transform: 'scale(1)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ]
})
export class EventComponent {
  isHalloween = false;
  isSpiderClicked = false;

  halloweenImageUrl1=`${environment.imgBaseUrl}event/hallloween-1.png`
  halloweenImageUrl2=`${environment.imgBaseUrl}event/hallloween-2.png`
  halloweenImageUrl3=`${environment.imgBaseUrl}event/Comp-1_2.gif`

  netClicked() {
    this.isHalloween = true;
    setTimeout(() => {
      this.isHalloween = false;
    }, 3300);
  }
  spiderClicked() {
    this.isSpiderClicked = !this.isSpiderClicked;
  }

}
