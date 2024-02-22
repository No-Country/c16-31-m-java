import { Injectable } from '@angular/core';
import { signInWithPopup, GoogleAuthProvider, signOut, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../shared/interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register(body: User) {
    return createUserWithEmailAndPassword(this.auth, body.email, body.password);
  }

  login(body: User) {
    return signInWithEmailAndPassword(this.auth, body.email, body.password);
  }

  logout() {
    return signOut(this.auth);
  }
}
