import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, GoogleAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


 
  userInfo:string[]=[]
  LoginSuccess=false;
  userName!: string;
  loginFailed!: boolean;
  userInfoComponentData:any
  useremail=''

  userNameFun()
  {
    return this.userName
  }

  userData()
  {
    return this.userInfo
  }

  userEmail()
  {
    return this.useremail
  }
  


  constructor( public afAuth: AngularFireAuth,private db: AngularFirestore) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
    
  } 
  SendDataToUserInfoComponent()
  {
  return this.userInfoComponentData
  } 

  addNewUser(id:string, user:string, ip:string,time:string[]) {
    this.db.collection('User').doc(id).set({user:user,ip:ip,time:time});
   }

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
      console.log('You have been successfully logged in!')
        this.LoginSuccess=true
        this.userInfoComponentData = result.user._delegate

        this.userName=result.user._delegate.displayName
      

        this.userInfo.push(result.user.metadata.lastSignInTime) 
        this.userInfo.push(result.user.metadata.creationTime)
        this.useremail= result.user._delegate.email


       

        
       
    }).catch((error: any) => {
      this.loginFailed=true
      this.userInfo.push(error.message)
        console.log(error)
    })
  }

}