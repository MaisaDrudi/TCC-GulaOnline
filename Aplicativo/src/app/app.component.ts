import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    // { title: 'Cadastro', url: '/cadastro', icon: 'reader' },

   // { title: 'Meu Pedido', url: '/folder/meu_pedido', icon: 'fast-food' }, código sem alteração
    { title: 'Lojas Cadastradas', url: '/produtos', icon: 'storefront' }, // código com alteração em TESTE
    //{ title: 'Cadastrar-se', url: '/folder/Cadastrar-se', icon: 'person-add' },

   // { title: 'Perfil', url: '/folder/perfil', icon: 'man' }, código sem alteração
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },

   // { title: 'Ajuda', url: '/folder/ajuda', icon: 'help-circle' }, código sem alteração
    { title: 'Ajuda', url: '/ajuda', icon: 'help-circle' },
    
   // { title: 'Sair', url: '/folder/sair', icon: 'close-circle' }, código sem alteração
    { title: 'Sair', url: '/sair', icon: 'close-circle' }, // código com alteração
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
