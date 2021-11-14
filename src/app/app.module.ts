import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatTabsModule} from '@angular/material/tabs'
import { MatCardModule} from '@angular/material/card';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    ContactComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatTabsModule,MatCardModule,MatGridListModule,MatIconModule,MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
