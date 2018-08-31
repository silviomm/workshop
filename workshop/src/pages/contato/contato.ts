import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contato } from '../../models/contato';
import { ContatoServiceProvider } from '../../providers/contato-service/contato-service';

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  public contato: Contato = <Contato>{};
  public isEdit: boolean;
  public titulo: string = '';

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private _contatoService: ContatoServiceProvider) {
    if (this.navParams.data.contato) {
      this.contato = this.navParams.data.contato;
      this.isEdit = true;
      this.titulo = 'Editar Contato';
    }
    else {
      this.titulo = 'Novo Contato';
      this.isEdit = false;
    }
  }

  public salvar() {
    if (this.isEdit) {
      this._contatoService.edita(this.contato).subscribe(contato => {
        this.navCtrl.pop();
      });
    } else {
      this._contatoService.insere(this.contato).subscribe(contato => {
        this.navCtrl.pop();  
      });
    }
  }
  
}
