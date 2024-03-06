import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})
export class AnimalProfileComponent {

  constructor() {

  }

  /* getAllCollectionAnimal(){
    this.animalProfileService.getAnimalCollection().subscribe({
      next: (collection) => {
        console.log(collection);

      },
      error: (err)=> {
        console.log(err);

      }
    })
  } */

}
