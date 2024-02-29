import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/modules/home/components/register/register.component';
import { LoginComponent } from 'src/app/modules/home/components/login/login.component';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nameImg:string = "";
  showAuthLogin:boolean = false;
  showAuthRegister:boolean = false;
  showHeaderForUserType:boolean = false;
  showEditButton:boolean = false;
  userName:string = "";
  userEmail = "";

  constructor(
    public router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {

  }

  @ViewChild('registerComponent', { static: false }) registerComponent!: RegisterComponent;
  @ViewChild('loginComponent', { static: false }) loginComponent!: LoginComponent;

  ngOnInit(): void {
    this.userService.getUserStatus().subscribe((isOnline) => {
      console.log(isOnline);
      this.userEmail = localStorage.getItem('email') as string
      if(this.userEmail === null){
        this.userName = 'Sin nombre'
      }else{
        this.itsRefuge(this.userEmail)
        this.userName = this.getNameOnlineUser()
      }
      this.showHeaderForUserType = isOnline;
    });

  }

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

  btnLogOut(){
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/home']);
        localStorage.removeItem('uid')
        localStorage.removeItem('email')
        this.userService.setUserStatus(false);
      })
      .catch(error => console.log(error));
  }

  getNameOnlineUser(){
    const nameSymbol = this.userEmail.search('@');
    return this.userEmail.slice(0, nameSymbol);
  }

  filterUser(data:any, emailOnline:string){
    const userFilter = data.filter((elem:any) => elem.email === emailOnline);
    return userFilter
  }

  itsRefuge(emailOnline:string){
    this.authService.getUserGoogle().subscribe({
      next: (data:any) => {
        const userFilterForEmail = this.filterUser(data, emailOnline)
        if(userFilterForEmail[0].userType === "refugio"){
          return this.showEditButton = true
        }else{
          return this.showEditButton = false
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
