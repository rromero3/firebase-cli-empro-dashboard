// src/app/providers/af.ts
import {Injectable} from "@angular/core";

import { AngularFireModule,  FirebaseApp  } from 'angularfire2';

// Custom Firebase modules
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase/app"


@Injectable()
export class AF {
  
  /**
   * Observable of authentication state
   */
  public user: Observable<firebase.User>;
  public messages: FirebaseListObservable<any>;
  public displayName : string;
  public email : string;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {

    this.user =  afAuth.authState;
    this.messages = db.list('messages');

  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
       this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Logs out the current user
   */
  logout() {
    this.afAuth.auth.signOut();
    /* return this.af.auth.logout(); */
  }

  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }
}
