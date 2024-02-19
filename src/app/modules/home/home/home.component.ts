import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) {}

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
