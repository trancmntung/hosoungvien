import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoSoUngVienComponent } from './ho-so-ung-vien/ho-so-ung-vien.component';

export const routes: Routes = [
  { path: 'hosoungvien', component: HoSoUngVienComponent },
  { path: 'quocgia', component: HoSoUngVienComponent },
  { path: '', redirectTo: '/hosoungvien', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
