import { Component, OnInit } from '@angular/core';
import { PerfilAnimalsService } from 'src/app/service/perfil-animals.service';
import { oneProfileAnimal } from 'src/app/shared/interface/perfilAnimal';
import { PerfilRefugioService } from 'src/app/service/perfil-refugio.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})
export class AnimalProfileComponent implements OnInit{

  idProfileAnimal:string = localStorage.getItem('idFileAnimal') as string;
  getEmailOnline:string = localStorage.getItem('email') as string;
  statusBtnsForEdit:boolean = false;
  objProfileAnimal:oneProfileAnimal = {
    age: 0,
    castrated: '',
    city: '',
    country: '',
    description: '',
    emailRefugio: '',
    history: '',
    id: '',
    idAnimal: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    imgURL1: '',
    imgURL2: '',
    imgURL3: '',
    imgURL4: '',
    name: '',
    peso: 0,
    sexo: '',
    size: '',
    species: '',
    vaccines: ''
  }
  profileAnimalForm: FormGroup;


  constructor(
    public perfilAnimalsService: PerfilAnimalsService,
    public perfilRefugioService: PerfilRefugioService,
    private router: Router,
    private fb: FormBuilder,
    ) {
      this.profileAnimalForm = this.fb.group({
        email : [''],
        password : ['']
      });
  }

  ngOnInit(): void {
    this.perfilAnimalsService.getProfileAnimalByID(this.idProfileAnimal).subscribe({
      next: (element:oneProfileAnimal) => {
        localStorage.setItem('authPublish', `${element.emailRefugio}`);
        this.objProfileAnimal = {
          age: element.age,
          castrated: element.castrated,
          city: element.city,
          country: element.country,
          description: element.description,
          emailRefugio: element.emailRefugio,
          history: element.history,
          id: element.id,
          idAnimal: element.idAnimal,
          image1: element.image1,
          image2: element.image2,
          image3: element.image3,
          image4: element.image4,
          imgURL1: element.imgURL1,
          imgURL2: element.imgURL2,
          imgURL3: element.imgURL3,
          imgURL4: element.imgURL4,
          name: element.name,
          peso:element.peso,
          sexo: element.sexo,
          size: element.size,
          species: element.species,
          vaccines: element.vaccines
        }

        this.statusBtnsForEdit = this.verifyAuthPublish(this.getEmailOnline, `${element.emailRefugio}`)
      },
      error: (err) => {
        console.log(err);
      }
  })

  }

  verifyAuthPublish(email:string, authPublish:string){
    if(email === authPublish){
      return true;
    }else{
      return false;
    }
  }

  openModalDelete(){
    const modelDiv = document.getElementById('myModalDelete')
    if(modelDiv != null){
      modelDiv.style.display = 'block';
    }
  }

  openModalEdit(){
    const modelDiv = document.getElementById('myModalEdit')
    if(modelDiv != null){
      modelDiv.style.display = 'block';
    }
  }


  deleteProfile(){
    this.perfilAnimalsService.deleteProfileAnimal(this.idProfileAnimal)
    .then(() => {
      console.log('eliminado')
      this.router.navigate(['/dashboard']);
    })
    .catch((error)=>console.log(error));
  }

}
