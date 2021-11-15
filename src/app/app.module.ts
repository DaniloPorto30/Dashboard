import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonsairComponent } from './pages/buttonsair/buttonsair.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AgentsComponent } from './components/agents/agents.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { TicketsComponent } from './components/tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SignupComponent,
    LoginComponent,
    ButtonsairComponent,
    OverviewComponent,
    SettingsComponent,
    SubscriptionComponent,
    HomeComponent,
    ContactsComponent,
    AgentsComponent,
    ArticlesComponent,
    IdeasComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
