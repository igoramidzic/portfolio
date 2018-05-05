import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestore} from 'angularfire2/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutMeComponent } from './components/pages/home/about-me/about-me.component';
import {environment} from '../environments/environment';
import {MeService} from './services/me.service';
import { LinkComponent } from './components/pages/home/link/link.component';
import { SkillsComponent } from './components/pages/home/skills/skills.component';
import { LoadingDotsComponent } from './components/spinners/loading-dots/loading-dots.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    SidebarComponent,
    HomeComponent,
    AboutMeComponent,
    LinkComponent,
    SkillsComponent,
    LoadingDotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatProgressBarModule,
    ChartModule,
    NgxChartsModule
  ],
  providers: [MeService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
