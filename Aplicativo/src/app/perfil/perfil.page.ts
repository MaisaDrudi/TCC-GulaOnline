import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cadastro } from '../models/cadastro';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  cmm: Cadastro[];

  constructor(public cadastroService: CadastroService, public activatedRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    
        let id_ca =  "2";
        let cadastro: Cadastro = {id_ca: id_ca, nome: "", cpf: "", fone: "", bairro: "", rua: "", numero: "", cidade: "", uf: "", cnpj: "", linksite: "", email: ""}
        this.cadastroService.get(cadastro).subscribe(
        (resposta: Cadastro[]) => {
          //this.emm = resposta;
          this.cmm = resposta;
          console.log(this.cmm);
          
        },
        (error) => {
          console.log(error);
        }
    );       
    }
  

  /*
  showDetail(id_ca: string){
    const navigationExtras: NavigationExtras = {
      queryParams: {
      id_ca: JSON.stringify(id_ca)
   }};
   this.navCtrl.navigateRoot('lista-produtos',navigationExtras); // Chama outra tela e passa atributos
  }
  */
}
