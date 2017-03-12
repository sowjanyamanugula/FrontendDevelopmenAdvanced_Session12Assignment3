import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule }  from '@angular/forms';
import { AppComponent }  from './app.component';
import { FriendListComponent } from './friends/friends-list.component';
import {Startswith} from './friends/friends-list.pipe';


@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,
                 FriendListComponent,
                 Startswith
                 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
