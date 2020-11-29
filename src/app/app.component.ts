import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProjetLivres';

  constructor() {
    const config = {
      apiKey: "AIzaSyBHpJpCSXkG2KVq021i4KPyPCW2TiwST0U",
	  authDomain: "angularprojetlivres.firebaseapp.com",
	  databaseURL: "https://angularprojetlivres.firebaseio.com",
	  projectId: "angularprojetlivres",
	  storageBucket: "angularprojetlivres.appspot.com",
	  messagingSenderId: "661672157775",
	  appId: "1:661672157775:web:de6b2fa92124280df9c03a",
	  measurementId: "G-TYB2EGS58Q"
    };
    firebase.initializeApp(config);
  }
}
