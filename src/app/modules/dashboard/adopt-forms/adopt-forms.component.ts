import { Component } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { PerfilRefugioService } from 'src/app/service/perfil-refugio.service';

@Component({
  selector: 'app-adopt-forms',
  templateUrl: './adopt-forms.component.html',
  styleUrls: ['./adopt-forms.component.css']
})
export class AdoptFormsComponent {
 
  formulario: FormGroup;
  images: string[];
  oneImg : string = "";

  constructor(private storage: Storage, private perfilRef:PerfilRefugioService) {
    this.images = [];
    this.formulario = new FormGroup({
      image: new FormControl(),
      name:new FormControl(),
      country:new FormControl(),
      city: new FormControl(),
      description: new FormControl(),
      linkFacebook: new FormControl(),
      linkInstagram: new FormControl(),
      linkWhatsApp: new FormControl(),
      linkPageWeb:new FormControl(),
      donations: new FormControl()
    })
  }

  
  

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `perfilRefugio/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log("AAA: ",response)
        this.getImages();
      })
      .catch(error => console.log(error));

  }

getImages() {
    const imagesRef = ref(this.storage, 'perfilRefugio');
    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          console.log(url);  
          this.images.push(url);
        }
    
        this.oneImg = this.images.slice(0)[0];

      })

      .catch(error => console.log(error));     
  }
  

  // Crear el perfil del Refugio
  async onSubmit() {
    const frmImg = {
       ...this.formulario.value, 
       imgURL: this.oneImg,
       emailRefugio: localStorage.getItem('email') as string
    };
    console.log(this.formulario.value)
    const response = await this.perfilRef.addPerfilRefugio(frmImg);
    console.log(response);
    this.formulario.reset();
  }
}
