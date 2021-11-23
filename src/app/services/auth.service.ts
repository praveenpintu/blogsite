import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, GoogleAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  LoginSuccess=false;
  userName!: string;
  loginFailed!: boolean;
  userNameFun()
  {
    return this.userName
  }

  constructor( public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
    
  }  

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
      console.log('You have been successfully logged in!')
        this.LoginSuccess=true
       
        this.userName=result.user._delegate.displayName
       
    }).catch((error: any) => {
      this.loginFailed=true
        console.log(error)
    })
  }

}