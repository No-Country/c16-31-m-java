import { Injectable } from '@angular/core';
import { signInWithPopup, GoogleAuthProvider, signOut, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../shared/interface/auth';
import { Firestore, collectionData, collection, addDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private firestore: Firestore
    ) { }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register(body: User) {
    return createUserWithEmailAndPassword(this.auth, body.email, body.password);
  }

  registerUser(uid: string, userType: User){
    const userRef = collection(this.firestore ,'usuarios');
    return addDoc(userRef, {uid: uid, email: userType.email, userType: userType.user })
  }

  registerUserWithGoogle(uid:string, email: string, typeOfUser: string){
    const userRef = collection(this.firestore ,'usuarios');
    return addDoc(userRef, {uid: uid,  email: email, userType: typeOfUser })
  }

  getUserGoogle(): Observable<any> {
    const userGoogleRef = collection(this.firestore, 'usuarios');
    return collectionData(userGoogleRef, { idField: 'id' }) as Observable<any>;
  }

  login(body: User) {
    return signInWithEmailAndPassword(this.auth, body.email, body.password);
  }

  logout() {
    return signOut(this.auth);
  }
}
