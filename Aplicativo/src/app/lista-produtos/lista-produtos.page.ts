import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Alimentos } from '../models/alimentos';
import { AlimentosService } from '../services/alimentos.service';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {
  amm: Alimentos[];
 
  constructor(public alimentosService: AlimentosService, public activatedRoute: ActivatedRoute, public navCtrl: NavController) {

   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => { // Pega parametros que são enviados pela query "id_ca", coloca dentro de params
      if (params && params.id_ca) {
        let id_ca = JSON.parse(params.id_ca);
        let alimento: Alimentos = {idali: "", id_ca: id_ca, nomeali: "", descricao: "", qtd: "", preco: "", img: ""}
        this.alimentosService.get(alimento).subscribe(
        (resposta: Alimentos[]) => {
          //this.emm = resposta;
          this.amm = resposta;
         // console.log(this.amm);
          
        },
        (error) => {
          console.log(error);
        }
    );       
    }
  });
  }

  /*
  checkbox(event: CustomEvent, nomeali:string) {

    let produto: Alimentos[]= this.amm.filter(p => p.nomeali == nomeali); 

   // console.log(event.detail.checked);
    var checked = event.detail.checked;
    if(checked){
      console.log('Pedido adicionado');
      console.log(produto[0].nomeali+ " = "+produto[0].preco);
    //  console.log("Produto selecionado="+produto[0].preco);
     
    }else{
      console.log('Pedido retirado');
    }
     
  }
  */

}
