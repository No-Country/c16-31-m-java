import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilAnimalsService } from 'src/app/service/perfil-animals.service';
@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit{

  isMenuActive: boolean = false;
  textBtnSearch: string = 'Buscar';
  nameSearch: string = '';
  filteredObjAdopt: any[] = [];
  filters = {
    species: null,
    sexo: null,
    age: null,
    size: null,
    country: null,
    city: null,
    refuge: null,
  };
  objAdopt: any[] = []

  constructor(
    private router: Router,
    public perfilAnimalsService: PerfilAnimalsService
    ){

  }

  applyFilters() {
    this.filteredObjAdopt = this.objAdopt.filter((card) => {
      return (
        (this.filters.species === null || card.species === this.filters.species) &&
        (this.filters.sexo === null || card.sexo === this.filters.sexo) &&
        (this.filters.age === null || this.calculatedgAge(card.age) === this.filters.age) &&
        (this.filters.size === null || card.size === this.filters.size) &&
        (this.filters.country === null || card.country === this.filters.country) &&
        (this.filters.city === null || card.city === this.filters.city) &&
        (this.filters.refuge === null || card.refuge === this.filters.refuge)
      );
    });
  }

  calculatedgAge(age:number){
    if(age > 0 && age < 4 ){
      return '0a3'
    }else if( age > 3 && age < 7){
      return '3a6'
    }else{
      return '6a+'
    }
  }

  resetFilters() {
    this.filters = {
      species: null,
      sexo: null,
      age: null,
      size: null,
      country: null,
      city: null,
      refuge: null
    };

    this.applyFilters();
  }

  toggleMenuSearch(): void {
    this.isMenuActive = !this.isMenuActive;
    if(this.isMenuActive === false){
      this.textBtnSearch = 'Buscar'
    }else{
      this.textBtnSearch = 'Cerrar'
    }
  }

  ngOnInit(): void {
    this.perfilAnimalsService.getCollectionAnimals().subscribe({
      next: (animal) => {
        animal.forEach((element:any) => {
          this.objAdopt.push(element)
        });
      }
    })
    this.filteredObjAdopt = this.objAdopt
    console.log('sss', this.objAdopt);

  }

  /* objAdopt: any[] = [
    { name: 'Lola p h 36 g p li 4p', imageUrl: '../../../../assets/animal1.jpg', species:'perro', sex:'hembra', age:'3a6', size:'grande', country:'peru', city:'lima', refuge:'4patas', id:'23423lola' },
    { name: 'Martin g m 36 m ar ba va', imageUrl: '../../../../assets/animal2.jpg', species:'gato', sex:'macho', age:'3a6', size:'mediano', country:'argentina', city:'buenosAires', refuge:'vozAnimal', id:'23455martin' },
    { name: 'Rosita g h 03 g p li cal', imageUrl: '../../../../assets/animal3.jpg', species:'gato', sex:'hembra', age:'0a3', size:'grande', country:'peru', city:'lima', refuge:'callejeritos', id:'23423rosita' },
    { name: 'Tito p m 36 p ar ba cal', imageUrl: '../../../../assets/animal1.jpg', species:'perro', sex:'macho', age:'3a6', size:'pequeño', country:'argentina', city:'buenosAires', refuge:'callejeritos', id:'75675tito' },
    { name: 'Rose g h 6+ p ch co 4p', imageUrl: '../../../../assets/animal2.jpg', species:'gato', sex:'hembra', age:'6a+', size:'pequeño', country:'chile', city:'concepcion', refuge:'4patas', id:'8745646rose' },
    { name: 'Kira g h 6+ g ch co 4p', imageUrl: '../../../../assets/animal3.jpg', species:'gato', sex:'hembra', age:'6a+', size:'grande', country:'chile', city:'concepcion', refuge:'4patas', id:'2345345kira'},
  ]; */

  goToProfileAnimal(Animalid:string, idProfile:string){
    localStorage.setItem('idFileAnimal', idProfile)
    /* window.open(`/dashboard/${Animalid}`, '_blank'); */
    this.router.navigate(['/dashboard', Animalid]);
  }

  onSearchNameAdopt() {
    this.filteredObjAdopt = this.objAdopt.filter((card) => {
      return (
        (this.filters.species === null || card.species === this.filters.species) &&
        (this.filters.sexo === null || card.sexo === this.filters.sexo) &&
        (this.filters.age === null || this.calculatedgAge(card.age) === this.filters.age) &&
        (this.filters.size === null || card.size === this.filters.size) &&
        (this.filters.country === null || card.country === this.filters.country) &&
        (this.filters.city === null || card.city === this.filters.city) &&
        (this.filters.refuge === null || card.refuge === this.filters.refuge) &&
        (this.nameSearch === '' || card.name.toLowerCase().includes(this.nameSearch.toLowerCase()))
      );
    });
  }
}
