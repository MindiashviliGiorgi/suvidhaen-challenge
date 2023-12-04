import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { TeamsPageComponent } from './pages/teams-page/teams-page.component';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { CurrentOpeningsPageComponent } from './pages/current-openings-page/current-openings-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeHomeComponent } from './components/welcome-home/welcome-home.component';
import { ProjectsHomeComponent } from './components/projects-home/projects-home.component';
import { YoutubeVideosComponent } from './components/youtube-videos/youtube-videos.component';
import { HttpClientModule } from '@angular/common/http';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PortfolioPageComponent,
    TeamsPageComponent,
    CareersPageComponent,
    CurrentOpeningsPageComponent,
    ContactUsPageComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeHomeComponent,
    ProjectsHomeComponent,
    YoutubeVideosComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
