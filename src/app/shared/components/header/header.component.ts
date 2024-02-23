import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public router: Router) {}

  openModal() {
    const modelDiv = document.getElementById('myModal')
    if(modelDiv != null){
      modelDiv.style.display = 'block';
    }
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal')
    if(modelDiv != null){
      modelDiv.style.display = 'none';
    }
  }

}
