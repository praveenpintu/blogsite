import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatTabsModule} from '@angular/material/tabs'
import { MatCardModule} from '@angular/material/card';
import { ContactComponent } from './contact/contact.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WebcamModule } from 'ngx-webcam';
import {MatExpansionModule} from '@angular/material/expansion';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ContactComponent,
    HomeComponent,
    BioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSnackBarModule,WebcamModule,MatExpansionModule,
    BrowserAnimationsModule,MatTabsModule,MatCardModule,MatGridListModule,MatIconModule,MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
