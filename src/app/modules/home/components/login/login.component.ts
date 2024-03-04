import { Component} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  msgError:String = 'Esperando el error';
  dataDismissValue: string = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginWithEmail() {
    this.authService.login(this.loginForm.value)
      .then((response)=> {
        this.dataDismissValue = 'modal';
        localStorage.setItem('uid', response.user.uid);
        localStorage.setItem('email', response.user.email as string);
        this.userService.setUserStatus(true);

      })
      .catch(error => {

        const msgErrorElement = document.querySelector('.msgError') as HTMLElement | null;
        if (msgErrorElement) {
          msgErrorElement.style.visibility = 'visible';
          setTimeout(() => {
            msgErrorElement.style.visibility = 'hidden';
          }, 4000);
          console.log('aaa');


        }
          this.msgError = 'Usuario o contraseña incorrectos.'
      });
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle()
      .then(res => {
        localStorage.setItem('uid', res.user.uid);
        localStorage.setItem('email', res.user.email as string);

        this.authService.getUserGoogle().subscribe({
          next: (data:any) => {
            const emailFilter = data.filter((elem:any) => elem.email === res.user.email);
            if(emailFilter.length === 0){
              this.authService.registerUserWithGoogle(res.user.uid, res.user.email!, 'persona')
              .then((res) => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              })
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
        this.userService.setUserStatus(true);
      })
      .catch(err => {
        this.userService.setUserStatus(false);
        console.log(err);
      })
  }

  clearForm() {
    this.loginForm.reset();
  }

}
