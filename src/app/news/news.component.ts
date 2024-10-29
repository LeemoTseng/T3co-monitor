import { Component, inject, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { itemAnimation, showUpAnimation } from '../../animation';
import { CommonModule, NgFor } from '@angular/common';

import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { NewsItems } from '../interface/news-items';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../../shared.module';
import { EventComponent } from '../event/event.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-news',
  standalone: true,
  styles: [`.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}`],
  imports: [HeaderComponent, FooterComponent, SharedModule, NgFor, RouterLink, CommonModule, MatRippleModule, MatIcon, EventComponent],
  templateUrl: './news.component.html',
  animations: [
    trigger('viewItemAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [animate('150ms ease-in')]),
      transition(':leave', [animate('150ms ease-in')]),
    ]), showUpAnimation, itemAnimation
  ]
})
export class NewsComponent implements OnInit {
  httpClient = inject(HttpClient);
  news: NewsItems[] = [];
  ngOnInit(): void {
    this.httpClient.get<{ newsList: NewsItems[] }>('assets/json/news.json')
      .subscribe(data => {
        this.news = data.newsList.map(item=>({
          ...item,
          src: `${environment.imgBaseUrl}${item.src}`,
          qrcode: `${environment.imgBaseUrl}${item.qrcode}`
        }))
        console.log(this.news);
      })
  }

  dynamicTitle: string = "News";
  dynamicFooter: string = "Back to Home";
  dynamicTitleStyle: string = " drop-shadow-lg";
  pStyle: string = "text-3xl text-secondary/60 leading-relaxed text-justify";

  selectedNews: NewsItems | null = null;


  // Ripple
  rippleColor: string = 'rgba(255, 255, 255, 0.2)';
  radius: number = 1000;


  // Open/close the News
  isOpened: boolean = false;

  openNews(item: NewsItems) {
    this.isOpened = true;
    this.selectedNews = item;

  }

  closeNews() {
    this.isOpened = false;
  }


  // Scroll
  scrollPosition: string = 'start';
  isDragging = false;
  startY = 0;
  scrollTop = 0;

  // Dragging
  onDragStart(event: PointerEvent): void {
    this.isDragging = true;
    this.startY = event.clientY;
    this.scrollTop = document.querySelector('.frame')?.scrollTop || 0;
    event.preventDefault();
  }

  onDragging(event: PointerEvent): void {
    if (!this.isDragging) return;
    const currentY = event.clientY;
    const deltaY = this.startY - currentY;
    const frame = document.querySelector('.frame');
    if (frame) {
      frame.scrollTop = this.scrollTop + deltaY;
    }
  }

  onDragEnd(): void {
    this.isDragging = false;
  }

}



