import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent {

  isMenuActive: boolean = false;
  textBtnSearch: string = 'Buscar';

  toggleMenuSearch(): void {
    this.isMenuActive = !this.isMenuActive;
    if(this.isMenuActive === false){
      this.textBtnSearch = 'Buscar'
    }else{
      this.textBtnSearch = 'Cerrar'
    }
  }
}
