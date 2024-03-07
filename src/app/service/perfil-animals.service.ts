import { Injectable } from '@angular/core';
import { perfilAnimal } from '../shared/interface/perfilAnimal';
import { Firestore, addDoc, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  getCollectionAnimals(): Observable<any> {
    const userAnimalRef = collection(this.firestore, 'perfilAnimal');
    return collectionData(userAnimalRef, { idField: 'id' }) as Observable<any>;
  }

  getProfileAnimalByID(id: string) {
    const profileAnimalRef = doc(this.firestore, `perfilAnimal/${id}`);
    return docData(profileAnimalRef, { idField: 'id' }) as Observable<any>;
  }

}
