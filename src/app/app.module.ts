import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatTabsModule} from '@angular/material/tabs'
import { MatCardModule} from '@angular/material/card';
import { BioComponent } from './bio/bio.component';
import { FamilyComponent } from './family/family.component';
import { ContactComponent } from './contact/contact.component'; 
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    FamilyComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatTabsModule,MatCardModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
