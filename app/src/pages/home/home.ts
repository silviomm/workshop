import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Contato } from '../../models/contato';
import { ContatoServiceProvider } from '../../providers/contato-service/contato-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos: Contato[] = [];

  constructor(public navCtrl: NavController, private _contatoService: ContatoServiceProvider, private _loadingCtrl: LoadingController, private _alertCtrl: AlertController) {}

  ionViewDidEnter() {
    this.getContatos();
  }

  getContatos() {
    let loading = this._loadingCtrl.create({
      content: 'Carregando...'
    });

    loading.present();

    this._contatoService.lista().subscribe(
      (contatos) => {
        this.contatos = contatos;
        loading.dismiss();
      },
      (err) => {
        loading.dismiss();
        this._alertCtrl.create({
          title: 'Falha na conexão',
          subTitle: 'Não foi possível carregar os contatos. Tente novamente mais tarde!',
          buttons: [
            { text: 'Ok' }
          ]
        }).present();
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
    this._contatoService.remove(contato).subscribe(contatos => {
      this.contatos = contatos;
    });
  }

}
