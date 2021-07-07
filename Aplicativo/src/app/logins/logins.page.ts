import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Logins } from '../models/logins';
import { LoginsService } from '../services/logins.service';


@Component({
  selector: 'app-logins',
  templateUrl: './logins.page.html',
  styleUrls: ['./logins.page.scss'],
})
export class LoginsPage implements OnInit {
  lmm: Logins[];

  constructor(public loginsService: LoginsService, public activatedRoute: ActivatedRoute, public nav: NavController) { }
  acessar(a) {
   
    this.nav.navigateForward(a);    
  }

  ngOnInit() {
    let id_ca =  "";
    let logins: Logins = {id_ca: id_ca, idti_lo: "", senha: ""}
    this.loginsService.get(logins).subscribe(
    (resposta: Logins[]) => {
      //this.emm = resposta;
      this.lmm = resposta;
      console.log(this.lmm);
      
    },
    (error) => {
      console.log(error);
    }
); 

  }

}
