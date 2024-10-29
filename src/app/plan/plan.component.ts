import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from '../../shared.module';
import { MatRippleModule } from '@angular/material/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { itemAnimation, showUpAnimation } from '../../animation';
import { EventComponent } from '../event/event.component';
import { environment } from '../../environments/environment';


interface PlanItems {
  name: string;
  description: string;
  imgUrl: string;
  price: string;
  features: string[];
  icons?: { name: string, description: string }[];
}

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [MatRippleModule, SharedModule, HeaderComponent, FooterComponent, EventComponent],
  templateUrl: './plan.component.html',
  animations: [
    trigger('viewPlanItemAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [animate('300ms ease-in')]),
      transition(':leave', [animate('300ms ease-in')]),
    ]), showUpAnimation, itemAnimation
  ]
})
export class PlanComponent implements OnInit {
  httpClient = inject(HttpClient); // Inject the HttpClient service
  plans: PlanItems[] = [];
  ngOnInit(): void {
    this.httpClient.get<{ PlanItems: PlanItems[] }>('assets/json/plans.json')
      .subscribe(data => {
        this.plans = data.PlanItems.map(item => ({
          ...item,
          imgUrl: `${environment.imgBaseUrl}${item.imgUrl}`,
        }));
        console.log(this.plans);
      })
  }

  dynamicTitle = 'Plan';
  
  rippleColor: string = 'rgba(255, 255, 255, 0.3)';
  centered = true;
  radius = 600;

  isOpen: boolean = false;
  selectedPlanItem: PlanItems | null = null; // To store the selected item

  openPlanItem(item: PlanItems) {
    this.isOpen = true;
    this.selectedPlanItem = item;
    // console.log(item)
  }
  closePlanItem() {
    this.isOpen = false;
  }
}
