import { Component, OnInit } from '@angular/core';
import { PerfilRefugioService } from 'src/app/service/perfil-refugio.service';
import { oneProfileRefuge } from 'src/app/shared/interface/perfilRefugio';

@Component({
  selector: 'app-refuge-profile',
  templateUrl: './refuge-profile.component.html',
  styleUrls: ['./refuge-profile.component.css']
})
export class RefugeProfileComponent implements OnInit{

  objProfileRefuge:oneProfileRefuge = {
    image: '',
    imgURL: '',
    name: '',
    country: '',
    city: '',
    description: '',
    linkFacebook: '',
    linkInstagram: '',
    linkWhatsApp: '',
    linkPageWeb: '',
    donations: '',
    emailRefugio: ''
  }

  constructor(public perfilRefugioService: PerfilRefugioService){

  }

  ngOnInit(): void {
    const refugeAuth:string = localStorage.getItem('authPublish') as string
    this.obtainProfileRefuge(refugeAuth)
  }

  async obtainProfileRefuge(email: string) {
    try {
      const dataRefuge = await this.perfilRefugioService.getProfileAnimalByEmail(email);
      this.objProfileRefuge = {
        image: dataRefuge.image,
        imgURL: dataRefuge.imgURL,
        name: dataRefuge.name,
        country: dataRefuge.country,
        city: dataRefuge.city,
        description: dataRefuge.description,
        linkFacebook: dataRefuge.linkFacebook,
        linkInstagram:dataRefuge.linkInstagram,
        linkWhatsApp: dataRefuge.linkWhatsApp,
        linkPageWeb: dataRefuge.linkPageWeb,
        donations: dataRefuge.donations,
        emailRefugio: dataRefuge.emailRefugio
      }
      localStorage.removeItem('authPublish')
    } catch (error) {
      console.error('Error obteniendo el perfil del animal:', error);
    }
  }
}
