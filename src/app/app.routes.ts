import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { SpaceComponent } from './space/space.component';
import { PrivateOfficeComponent } from './space/private-office/private-office.component';
import { HotDeskComponent } from './space/hot-desk/hot-desk.component';
import { OpenAreaComponent } from './space/open-area/open-area.component';
import { MeetingRoomComponent } from './space/meeting-room/meeting-room.component';
import { PartnersAndMembersComponent } from './partners-and-members/partners-and-members.component';
import { PlanComponent } from './plan/plan.component';
import { NewsComponent } from './news/news.component';
import { QuizComponent } from './quiz/quiz.component';
// import { BatContainerComponent } from './festival/bat-container/bat-container.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // 將根路徑重定向到 'home'
  },
  {
    path: 'home',
    component: HomeMenuComponent, // 主頁面的組件
  },
  // Space module
  {
    path: 'space',
    component: SpaceComponent,
    children: [
      {
        path: 'private-office',
        component: PrivateOfficeComponent,
      },
      {
        path: 'hot-desk',
        component: HotDeskComponent,
      },
      {
        path: 'open-area',
        component: OpenAreaComponent,
      },
      {
        path: 'meeting-room',
        component: MeetingRoomComponent,
      },
    ],
  },
  // Plan module
  {
    path: 'plan',
    component: PlanComponent,
  },
  // Partners and Members module
  {
    path: 'partners-and-members',
    component: PartnersAndMembersComponent,
  },
  // News module
  {
    path: 'news',
    component: NewsComponent,
  },
  // Quiz module
  {
    path: 'quiz',
    component: QuizComponent,
  },
  // Wildcard route for undefined paths
  {
    path: '**',
    redirectTo: 'home', 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
