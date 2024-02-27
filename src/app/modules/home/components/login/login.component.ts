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
  msgError:String = 'Esperando el error';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginWithEmail() {
    this.authService.login(this.loginForm.value)
      .then((response)=> {
        localStorage.setItem('uid', response.user.uid);
        localStorage.setItem('email', response.user.email as string);
        localStorage.setItem('user', this.loginForm.value.user);

      })
      .catch(error => {
        const msgErrorElement = document.querySelector('.msgError') as HTMLElement | null;
        if (msgErrorElement) {

          msgErrorElement.style.visibility = 'visible';
          setTimeout(() => {
            msgErrorElement.style.visibility = 'hidden';
          }, 4000);

        }
          this.msgError = 'Usuario o contraseña incorrectos.'
        });
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle()
      .then(res => {
        localStorage.setItem('uid', res.user.uid);
        localStorage.setItem('email', res.user.email as string);
        localStorage.setItem('user', 'persona');
      })
      .catch(err => {
        console.log(err);
      })
  }

  clearForm() {
    this.loginForm.reset();
  }

}
