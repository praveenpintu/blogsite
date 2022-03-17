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

import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component'
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { MyresumeComponent } from './myresume/myresume.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { TypingAnimationModule } from "angular-typing-animation";
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    
    ContactComponent,
    HomeComponent,
    BioComponent,
    LoginComponent,
    MyresumeComponent,
    UserInfoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSnackBarModule,WebcamModule,MatExpansionModule,
    BrowserAnimationsModule,MatTabsModule,MatCardModule,
    MatGridListModule,MatIconModule,MatTreeModule,MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    TypingAnimationModule,
    ClipboardModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
