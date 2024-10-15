import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { SpaceComponent } from './space/space.component';
import { PrivateOfficeComponent } from './private-office/private-office.component';

export const routes: Routes = [
    { path: '', component: HomeMenuComponent },
    { path: 'space', component: SpaceComponent },
    {path:'space/private-office',component:PrivateOfficeComponent},
    { path: '**', redirectTo: '' } // redirect to home-menu

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
