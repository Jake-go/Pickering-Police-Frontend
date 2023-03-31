import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliceComponent } from './police/police.component';
import { PhonecasesComponent } from './phonecases/phonecases.component';
import { AddPoliceComponent } from './police/add-police/add-police.component';
import { AddPhonecasesComponent } from './phonecases/add-phonecases/add-phonecases.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'police', component: PoliceComponent },
  { path: 'phonecases', component: PhonecasesComponent },
  { path: 'add-police', component: AddPoliceComponent },
  { path: 'add-phonecase', component: AddPhonecasesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
