import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Contato } from '../../models/contato';

@IonicPage()
@Component({
  selector: 'page-editar-contato',
  templateUrl: 'editar-contato.html',
})
export class EditarContatoPage {
  
  contato: Contato;
  categories: any[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {

    this.contato = new Contato();

    if (this.navParams.data.id) {
      //Busca no banco o id passado, se existir, faz this.contato = resultado da busca
    }
  }

  public salvar() {
    if (this.contato.id) {
      //Se o id já existe atualiza
    } else {
      //Se o id não existe cria um novo
    }
  }

}
