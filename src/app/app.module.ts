import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsersService } from './serivce/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './components/users/users.component';




@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    UsersComponent
  ],
  imports: [
     BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
