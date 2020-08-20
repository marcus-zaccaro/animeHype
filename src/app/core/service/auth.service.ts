import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthenticationByGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'pt';
    provider.setCustomParameters({
      login_hint: 'user@example.com'
    });
    firebase.auth().signInWithPopup(provider).then(result => {
      const token = result.user.getIdToken;
      const user = result.user;
      console.log(result.user);
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.mail;
      const credencial = error.credencial;
    });
  }
}
