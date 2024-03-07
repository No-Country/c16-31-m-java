import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, docData, query, getDocs, where} from '@angular/fire/firestore';
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


  async getProfileAnimalByEmail(email: string): Promise<any>{
    let dataRefuge = {}
    const citiesCollection = collection(this.firestore, 'perfilRefugio');
    const q = query(citiesCollection, where("emailRefugio", "==", email));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dataRefuge = doc.data()
      });
    } catch (error) {
      console.error('Error getting documents:', error);
    }
    return dataRefuge
  }


}
