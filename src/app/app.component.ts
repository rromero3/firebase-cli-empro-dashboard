import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AF } from "./providers/af";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	public isLoggedIn: boolean;
	public items: FirebaseListObservable<any[]>;
  	public title : string;
  	public userUID : string;

constructor(db: AngularFireDatabase, private router: Router, public afService: AF) { 
     
     this.title = "sample";

     this.afService.user.subscribe(
      (auth) => {
      		if(auth == null) {
 				console.log("Not Logged in.");
       		    this.router.navigate(['login']);
          		this.isLoggedIn = false;

      		}
      		else{
				console.log("Successfully Logged in.");
     	     	this.isLoggedIn = true;
      	    	// UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
        	  	// the user did not get redirected to the home page.
       	 	 	this.router.navigate(['']);
       	 	 	this.items = db.list('/items');

       	 	 
					console.log("google display name");
		            this.afService.displayName = auth.displayName;
		            this.afService.email = auth.email;


					console.log("displayName "+auth.displayName);
					console.log("email "+auth.email);
		          
      		}
      });

     this.isLoggedIn = true;
     this.router.navigate(['']);

  }

  login() {
    this.afService.loginWithGoogle();
    this.isLoggedIn = false;
  }

  logout() {
    this.afService.logout();
    this.isLoggedIn = false;
  }
}
