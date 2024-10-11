import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { SpaceComponent } from './space/space.component';

export const routes: Routes = [
    { path: '', component: HomeMenuComponent },
    { path: 'space', component: SpaceComponent },
    { path: '**', redirectTo: '' } // 重定向未知路径

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
