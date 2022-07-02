import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DisplayApodComponent } from './components/display-apod/display-apod.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { TruncatePipe } from './pipes/truncate-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DisplayApodComponent,
    NavbarComponent,
    FavoritosComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBfd6iaHWaVErXWxdHfahWWjlc8bfcXVF8",
      authDomain: "nasapp-55c72.firebaseapp.com",
      projectId: "nasapp-55c72",
      storageBucket: "nasapp-55c72.appspot.com",
      messagingSenderId: "990371615258",
      appId: "1:990371615258:web:ee6ac1fc1ed863cefeb7a3",
      measurementId: "G-6QDFWYYPX3"
    }),
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
