import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  registerForm: FormGroup;
  msgError:String = 'Esperando el error';
  showMsgErrorEmail:boolean = false;
  showMsgErrorPassword:boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  registerWithEmail() {
    this.authService.register(this.registerForm.value)
      .then((response)=> {
        console.log('entreeee', response);

      })
      .catch(error => {
        const msgErrorElement = document.querySelector('.msgError') as HTMLElement | null;
      if (msgErrorElement) {

        msgErrorElement.style.visibility = 'visible';
        setTimeout(() => {
          msgErrorElement.style.visibility = 'hidden';
        }, 4000);

      }
        this.msgError = 'Usuario incorrecto'
        console.log(error);

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
