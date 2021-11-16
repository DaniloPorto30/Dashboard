import { ArticlesComponent } from './components/articles/articles.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AgentsComponent } from './components/agents/agents.component';

const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'ideas',
    component: IdeasComponent,
  },
  {
    path: 'agents',
    component: AgentsComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
