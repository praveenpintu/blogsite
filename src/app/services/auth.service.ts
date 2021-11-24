import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, GoogleAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  userInfo:string[]=[]
  LoginSuccess=false;
  userName!: string;
  loginFailed!: boolean;
  userNameFun()
  {
    return this.userName
  }

  userData()
  {
    return this.userInfo
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
      
        this.userInfo.push(result.user.metadata.lastSignInTime) 
        this.userInfo.push(result.user.metadata.creationTime)
       

        
       
    }).catch((error: any) => {
      this.loginFailed=true
      this.userInfo.push(error.message)
        console.log(error)
    })
  }

}