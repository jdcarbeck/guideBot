import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatpageComponent } from './chatpage/chatpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ChatpageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'chat', component: ChatpageComponent},
      {path: '**', component: HomepageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
