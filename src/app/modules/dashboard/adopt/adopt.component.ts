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

  goToProfileAnimal(Animalid:string, idProfile:string){
    localStorage.setItem('idFileAnimal', idProfile)
    window.open(`/dashboard/${Animalid}`, '_blank');
    /* this.router.navigate(['/dashboard', Animalid]); */
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
