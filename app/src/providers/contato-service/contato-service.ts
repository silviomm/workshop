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

  public edita(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(`${this.CONTATO_API}/edita`, contato);
  }

  public insere(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(`${this.CONTATO_API}/novo`, contato);
  }

  public remove(contato: Contato): Observable<Array<Contato>> {
    return this.http.post<Array<Contato>>(`${this.CONTATO_API}/remove`, contato);
  }

}
