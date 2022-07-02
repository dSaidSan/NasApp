import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }

  switchView(tipo) {
    if (tipo === 'Registrar') {
      $('#loginContainer').hide();
      $('#registerContainer').show();
    } else {
      $('#loginContainer').hide();
      $('#registerContainer').show();
    }
  }
}