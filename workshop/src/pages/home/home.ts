import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contato } from '../../models/contato';
import { ContatoServiceProvider } from '../../providers/contato-service/contato-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos: Contato[] = [];

  constructor(public navCtrl: NavController, private _contatoService: ContatoServiceProvider) {}

  ionViewDidEnter() {
    this.getContatos();
  }

  getContatos() {
    this._contatoService.lista().subscribe(contatos => {
      this.contatos = contatos;
    });
  }

  adicionarContato() {
    //Apenas chama a página de adicionar que é igual a de edição
    this.navCtrl.push('ContatoPage');
  }

  editarContato(contato: Contato) {
    /*Chama a página de adicionar mas passa o id para preencher as informações do contato a ser
    editado*/
    this.navCtrl.push('ContatoPage', { contato: contato });
  }

  removerContato(contato: Contato) {
    //Remove o contato
  }

}
