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
  { path: '', component: HomeMenuComponent },
  // Space
  { path: 'space', component: SpaceComponent },
  { path: 'space/private-office', component: PrivateOfficeComponent },
  { path: 'space/hot-desk', component: HotDeskComponent },
  { path: 'space/open-area', component: OpenAreaComponent },
  { path: 'space/meeting-room', component: MeetingRoomComponent },
  // Plan
  {path:'plan', component:PlanComponent},
  // Partners and Members
  {
    path: 'partners-and-members', component: PartnersAndMembersComponent
  },
  //news
  {path:'news', component:NewsComponent},
  //quiz
  {path:'quiz',component:QuizComponent},

  //test
  // {path:'test',component:BatContainerComponent},

  // other

  { path: '**', redirectTo: '' } // redirect to home-menu

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
