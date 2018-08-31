import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarContatoPage } from './editar-contato';

@NgModule({
  declarations: [
    EditarContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarContatoPage),
  ],
})
export class EditarContatoPageModule {}
