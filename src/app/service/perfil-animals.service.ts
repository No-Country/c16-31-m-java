import { Injectable } from '@angular/core';
import { perfilAnimal } from '../shared/interface/perfilAnimal';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilAnimalsService {


  constructor(private firestore: Firestore) { }

  // Addd new Animal
  addPerfilAnimal(perfilanimal: perfilAnimal ){
      const perfilAnimalRef = collection(this.firestore, 'perfilAnimal');
      console.log("bb: ", perfilAnimalRef);
      
      return addDoc(perfilAnimalRef, perfilanimal);
  }

  
  
  getUserRefugio(): Observable<any> {
    const userRefugioRef = collection(this.firestore, 'perfilRefugio');
    return collectionData(userRefugioRef, { idField: 'id' }) as Observable<any>;
  }

}
