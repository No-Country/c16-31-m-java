import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/modules/home/components/register/register.component';
import { LoginComponent } from 'src/app/modules/home/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nameImg:string = "";
  showAuthLogin:boolean = false;
  showAuthRegister:boolean = false;

  constructor(
    public router: Router,
  ) {

  }
  @ViewChild('registerComponent', { static: false }) registerComponent!: RegisterComponent;
  @ViewChild('loginComponent', { static: false }) loginComponent!: LoginComponent;


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
    if (this.registerComponent) {
      this.registerComponent.clearForm()
    }else if(this.loginComponent){
      this.loginComponent.clearForm();
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
