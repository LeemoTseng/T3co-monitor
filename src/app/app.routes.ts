import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { SpaceComponent } from './space/space.component';
import { PrivateOfficeComponent } from './private-office/private-office.component';
import { HotDeskComponent } from './hot-desk/hot-desk.component';
import { OpenAreaComponent } from './open-area/open-area.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';
import { PartnersAndMembersComponent } from './partners-and-members/partners-and-members.component';
import { PlanComponent } from './plan/plan.component';

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

  { path: '**', redirectTo: '' } // redirect to home-menu

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
