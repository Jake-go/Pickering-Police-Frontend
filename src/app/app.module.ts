import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonecasesComponent } from './phonecases/phonecases.component';
import { PoliceComponent } from './police/police.component';
import { AddPoliceComponent } from './police/add-police/add-police.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoliceService } from './police/police.service';
import { PhonecasesService } from './phonecases/phonecases.service';
import { AddPhonecasesComponent } from './phonecases/add-phonecases/add-phonecases.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonecasesComponent,
    PoliceComponent,
    AddPoliceComponent,
    AddPhonecasesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PoliceService, PhonecasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
