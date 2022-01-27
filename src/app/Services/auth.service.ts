import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  // using Firebase Authentication
  constructor(private fbAuth: AngularFireAuth,
              private ngZone: NgZone,
              private router: Router) {
    // subscribing to Auth state
    this.fbAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', this.userData.email);
      }
    });
  }

  // sign in with email and password
  signIn(email: string, password: string): any {
    return this.fbAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      // navigate to home
      this.router.navigate(['/']);
    }).catch((err) => {
      window.alert(err.message);
    });
  }

  signUp(email: string, password: string): any  {
    return this.fbAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // navigate to home
      this.router.navigate(['/']);
    }).catch((err) => {
      window.alert(err.message);
    });
  }

  logOut(): any {
    return this.fbAuth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    });
  }
  isLoggedIn(): any {
    const user = localStorage.getItem('user');
    return user ? true : false;
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? user : null;
  }
}
