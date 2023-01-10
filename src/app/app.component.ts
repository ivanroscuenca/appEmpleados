import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor(private loginService:LoginService) {

  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD1FJo7mfNMODSrUyDb8o-AscnOHC5WDfc",
      authDomain: "mis-clientes-8c9e6.firebaseapp.com",

    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
