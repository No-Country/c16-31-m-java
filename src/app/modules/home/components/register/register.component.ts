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
      password : ['', [Validators.required, Validators.minLength(6)]],
      user : ['persona', [Validators.required]],
    });
  }

  registerWithEmail() {
    console.log(this.registerForm.value);

    this.authService.register(this.registerForm.value)
      .then((response)=> {
        localStorage.setItem('uid', response.user.uid);
        localStorage.setItem('email', response.user.email as string);
        localStorage.setItem('user', this.registerForm.value.user);
        this.authService.registerUser(response.user.uid, this.registerForm.value)
          .then((res) => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })

      })
      .catch(error => {
        const msgErrorEmail = document.querySelector('.msgErrorEmail') as HTMLElement | null;
            if (msgErrorEmail) {
              if (error.code === 'auth/email-already-in-use') {
                this.msgError = 'Este usuario ya está registrado.';
                msgErrorEmail.style.visibility = 'visible';
              }
              setTimeout(() => {
                msgErrorEmail.style.visibility = 'hidden';
              }, 4000);
            }
      });
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle()
      .then(res => {
        localStorage.setItem('uid', res.user.uid);
        localStorage.setItem('email', res.user.email as string);
        localStorage.setItem('user', 'persona');

        this.authService.registerUserWithGoogle(res.user.uid, res.user.email!, this.registerForm.value.user)
          .then((res) => {
            this.authService.getUserGoogle().subscribe({
              next: (data) => {
                console.log(data);

              }
            })
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log('Errorrr');
      })
  }

  clearForm() {
    this.registerForm.get('email')?.reset();
    this.registerForm.get('password')?.reset();
  }
}
