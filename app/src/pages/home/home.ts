import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Contato } from '../../models/contato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  contatos: Array<Contato> = [];

  constructor(public navCtrl: NavController) { 
    this.contatos.push({descricao: 'UFRJ', id: 1, nome: 'Silvio', telefone: '25986881'});
  }

  ionViewDidEnter() {
    this.getContatos();
  }

  getContatos() {
    //Provider pega tudo
  }

  adicionarContato() {
    //Apenas chama a página de adicionar que é igual a de edição
    this.navCtrl.push('EditarContatoPage');
  }

  editarContato(id: number) {
    /*Chama a página de adicionar mas passa o id para preencher as informações do contato a ser
    editado*/
    this.navCtrl.push('EditarContatoPage', { id: id });
  }

  removerContato(contato: Contato) {
    //Remove o contato
  }


}
