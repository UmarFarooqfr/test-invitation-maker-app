import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { authGuard } from './guard/auth.guard';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BackgroundPageComponent } from './components/pages/background-page/background-page.component';
import { SettingPageComponent } from './components/pages/setting-page/setting-page.component';
import { MycardPageComponent } from './components/pages/mycard-page/mycard-page.component';
import { TemplateSearchComponent } from './components/pages/template-search/template-search.component';
import { ReminderPageComponent } from './components/pages/reminder-page/reminder-page.component';
import { CreateReminderComponent } from './components/pages/create-reminder/create-reminder.component';
import { RatioPageComponent } from './components/pages/ratio-page/ratio-page.component';
import { ProTemplateComponent } from './components/pages/pro-template/pro-template.component';
import { SelectedTemplatesComponent } from './components/pages/selected-templates/selected-templates.component';

export const routes: Routes = [
  {
    path: 'app',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'background',
        component: BackgroundPageComponent,
      },
      {
        path: 'settings',
        component: SettingPageComponent,
      },
      {
        path: 'my-cards',
        component: MycardPageComponent,
      },
      {
        path: 'search-templates',
        component: TemplateSearchComponent,
      },
      {
        path: 'add-reminder',
        component: CreateReminderComponent,
      },
      {
        path: 'reminders',
        component: ReminderPageComponent,
      },
      {
        path: 'ratio',
        component: RatioPageComponent,
      },
      {
        path: 'pro-page',
        component: ProTemplateComponent,
      },
      {
        path: 'selected-template',
        component: SelectedTemplatesComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
