import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
    public authService: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    })
  }
  ngOnInit() { }

  validarForm() {
    var error = 'OK';
    if (this.form.get('email')?.errors) {
      error = 'El email es requerido y debe tener un formato correcto';
    }
    if (this.form.get('password')?.errors) {
      error = 'La clave es requerida y debe contener de 5 a 50 caracteres';
    }
    return error;
  }

  crearUsuario() {
    let error = this.validarForm();
    if (error !== 'OK') {
      alert(error);
      return;
    }
    this.authService.SignUp(this.form.get('email')?.value, this.form.get('password')?.value);
  }
}