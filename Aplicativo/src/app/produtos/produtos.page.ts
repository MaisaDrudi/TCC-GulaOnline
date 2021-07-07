import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Empresas } from 'src/app/models/empresas';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  emm: Empresas[];

  constructor( public empresasService: EmpresasService, public navCtrl: NavController) { }

  ngOnInit() {
    let empresa: Empresas = { linksite: "" }
    this.empresasService.get(empresa).subscribe(
      (resposta: any) => {
        //this.emm = resposta;
        this.emm = resposta.filter(d => d.linksite != null); // Filtro para retornar somente usuários que são empresas
       console.log(this.emm);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showDetail(id_ca: string){
    const navigationExtras: NavigationExtras = {
      queryParams: {
      id_ca: JSON.stringify(id_ca)
   }};
   this.navCtrl.navigateRoot('lista-produtos',navigationExtras); // Chama outra tela e passa atributos
  }

}
