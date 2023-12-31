import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NavdropdownDirective } from './shared/directives/navdropdown.directive';
import { MainCardComponent } from './shared/components/main-card/main-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoansectionComponent } from './shared/components/loansection/loansection.component';
import { DashboarddescribeComponent } from './shared/components/dashboarddescribe/dashboarddescribe.component';
import {MatIconModule} from '@angular/material/icon';
import { CreateUserComponent } from './shared/components/create-user/create-user.component';
import { UsertableComponent } from './shared/components/usertable/usertable.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ChartComponent } from './shared/components/chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DropdownDirective,
    NavdropdownDirective,
    MainCardComponent,
    LoansectionComponent,
    DashboarddescribeComponent,
    CreateUserComponent,
    UsertableComponent,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
