import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { perfilRefugio } from '../shared/interface/perfilRefugio';

@Injectable({
  providedIn: 'root'
})
export class PerfilRefugioService {

  constructor(private firestore: Firestore) { }

  addPerfilRefugio(perfilrefugio: perfilRefugio){
      const perfilRefugioRef = collection(this.firestore, 'perfilRefugio');
      return addDoc(perfilRefugioRef, perfilrefugio);
  }

}
