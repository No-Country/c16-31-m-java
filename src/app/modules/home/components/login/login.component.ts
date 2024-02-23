import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  loginWithEmail() {
    this.authService.login(this.loginForm.value)
      .then((response)=> {
        console.log('entreeee', response);

      })
      .catch(error => {
        console.log('error!!!', error)
      });
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle()
      .then(res => {
        console.log('Me autentifiqué :)');
        console.log(res);

      })
      .catch(err => {
        console.log('Errorrr');
      })
  }

}
