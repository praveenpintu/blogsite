import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, GoogleAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoginSuccess=false;
  loginFailed!: boolean;

  constructor( public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }  

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
        console.log('You have been successfully logged in!')
        this.LoginSuccess=true
    }).catch((error: any) => {
      this.loginFailed=true
        console.log(error)
    })
  }

}