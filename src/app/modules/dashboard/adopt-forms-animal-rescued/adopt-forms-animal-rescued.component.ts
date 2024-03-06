import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { PerfilAnimalsService } from 'src/app/service/perfil-animals.service';

@Component({
  selector: 'app-adopt-forms-animal-rescued',
  templateUrl: './adopt-forms-animal-rescued.component.html',
  styleUrls: ['./adopt-forms-animal-rescued.component.css']
})
export class AdoptFormsAnimalRescuedComponent implements OnInit {
  formulario: FormGroup;
  id : number = Math.floor(Math.random() * 1000000);


  images1: string[];
  images2: string[];
  images3: string[];
  images4: string[];
  
  imgAnimal1 : string = "";
  imgAnimal2 : string = "";
  imgAnimal3 : string = "";
  imgAnimal4 : string = "";
  

  constructor(private storage: Storage, private perfilanimalService: PerfilAnimalsService ) {
    this.images1 = [];
    this.images2 = [];
    this.images3 = [];
    this.images4 = [];

    this.formulario = new FormGroup({
      image1: new FormControl(),
      image2: new FormControl(),
      image3: new FormControl(),
      image4: new FormControl(),
      description: new FormControl(),
      history: new FormControl(),
      
      species: new FormControl(),
      name: new FormControl(),
      size: new FormControl(),
      sexo: new FormControl(),
      age: new FormControl(),
      peso: new FormControl(),
      castrated: new FormControl(),
      vaccines: new FormControl(),
      country: new FormControl(),
      city: new FormControl()
     
    })
  }

  ngOnInit(): void {
  }

  
 // Evento para la imagen 1
  uploadImage1($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `perfilAnimal-Img1/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages1();
      })
      .catch(error => console.log(error));

  }

  getImages1() {
    const imagesRef = ref(this.storage, 'perfilAnimal-Img1');
    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images1 = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          console.log(url);  
          this.images1.push(url);
        }
        this.imgAnimal1 = this.images1.slice(0)[0];
      })

      .catch(error => console.log(error));   
  }

   // Evento para la imagen 2
  uploadImage2($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `perfilAnimal-Img2/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages2();
      })
      .catch(error => console.log(error));

  }

  getImages2() {
    const imagesRef = ref(this.storage, 'perfilAnimal-Img2');
    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images2 = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          console.log(url);  
          this.images2.push(url);
        }
        this.imgAnimal2 = this.images2.slice(0)[0];
      })

      .catch(error => console.log(error));  
  }

   // Evento para la imagen 3
  uploadImage3($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `perfilAnimal-Img3/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages3();
      })
      .catch(error => console.log(error));

  }

  getImages3() {
    const imagesRef = ref(this.storage, 'perfilAnimal-Img3');
    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images3 = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          console.log(url);  
          this.images3.push(url);
        }
        this.imgAnimal3 = this.images3.slice(0)[0];
      })

      .catch(error => console.log(error));  
  }

   // Evento para la imagen 4
  uploadImage4($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `perfilAnimal-Img4/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages4();
      })
      .catch(error => console.log(error));

  }

  getImages4() {
    const imagesRef = ref(this.storage, 'perfilAnimal-Img4');
    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images4 = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          console.log(url);  
          this.images4.push(url);
        }
        this.imgAnimal4 = this.images4.slice(0)[0];
      })

      .catch(error => console.log(error));  
  }

  
  //Filter 
  // getCollectionAnimal(){
  //   this.perfilanimalService.getUserRefugio().subscribe({
  //     next: (elemnt) =>{
  //       console.log("Element: ",elemnt);
  //       const localStoraEmail = localStorage.getItem('email') as string;
  //       console.log("NN: ", this.getObtnEmail(localStoraEmail, elemnt) );
        
  //       //this.getObtnEmail(localStoraEmail, elemnt);
  //     },
  //     error: (error) => {
  //       console.log(error);
        
  //     }
  //   })
  // }

  // getObtnEmail(obtnEmail: string, collection: any){
  //    const EE = collection.filter((e: any) => {
       
      
  //     return e.emailRefugio === obtnEmail
  //   })
     
     
  // }

 
  // Crear el perfil del Animal
  async onSubmit() {
    const obtEmail = localStorage.getItem('email') as string;
  
    
    const frmImgAnimal = {
      ...this.formulario.value, 
      idAnimal : this.id + "-" + this.formulario.value.name,
      imgURL1: this.imgAnimal1,
      imgURL2: this.imgAnimal2,
      imgURL3: this.imgAnimal3,
      imgURL4: this.imgAnimal4,
      emailRefugio: obtEmail
   };
    
    //console.log(this.formulario.value)
    const response = await this.perfilanimalService.addPerfilAnimal(frmImgAnimal);
    //console.log("Aa ",response);
    this.formulario.reset();
  }
}
