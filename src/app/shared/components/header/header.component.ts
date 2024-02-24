import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nameImg:string = "";
  showAuthLogin:boolean = false;
  showAuthRegister:boolean = false;

  constructor(public router: Router) {}

  openModalLogin() {
    const modelDiv = document.getElementById('myModal')
    if(modelDiv != null){
      this.nameImg = "../../../../assets/imgLogin.jpg"
      this.showAuthLogin = true;
      this.showAuthRegister = false;
      modelDiv.style.display = 'block';
    }
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal')
    if(modelDiv != null){
      modelDiv.style.display = 'none';

    }
  }

  openModalRegister() {
    const modelDiv = document.getElementById('myModal')
    if(modelDiv != null){
      this.nameImg = "../../../../assets/imgRegister.jpg"
      this.showAuthLogin = false;
      this.showAuthRegister = true;
      modelDiv.style.display = 'block';
    }
  }

}
