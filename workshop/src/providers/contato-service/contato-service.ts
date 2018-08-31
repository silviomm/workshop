import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contato } from '../../models/contato';

@Injectable()
export class ContatoServiceProvider {

  public CONTATO_API = 'http://localhost:3000/api/contato'

  constructor(public http: HttpClient) {
    console.log('Hello ContatoServiceProvider Provider');
  }

  public lista(): Observable<Array<Contato>> {
    return this.http.get<Array<Contato>>(`${this.CONTATO_API}/lista`);
  }

  public edita(): Observable<Contato> {
    return this.http.get<Contato>(`${this.CONTATO_API}/edita`);
  }

  public insere(): Observable<Contato> {
    return this.http.get<Contato>(`${this.CONTATO_API}/novo`);
  }
}
