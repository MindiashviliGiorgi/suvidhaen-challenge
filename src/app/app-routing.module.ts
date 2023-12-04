import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { TeamsPageComponent } from './pages/teams-page/teams-page.component';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { CurrentOpeningsPageComponent } from './pages/current-openings-page/current-openings-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

const routes: Routes = [
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'portfolio',
    component : PortfolioPageComponent
  },
  {
    path : 'teams',
    component : TeamsPageComponent
  },
  {
    path : 'careers',
    component : CareersPageComponent
  },
  {
    path : 'currentOpenings',
    component : CurrentOpeningsPageComponent
  },
  {
    path : 'contact',
    component : ContactUsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
