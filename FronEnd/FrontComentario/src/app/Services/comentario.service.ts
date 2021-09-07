import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comentario } from '../Interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
    private myAppUrl = "https://localhost:44355/";
    private myApiUrl = "api/comentario/";
  constructor( private _http : HttpClient) { }

  getListComentarios() : Observable<any>{
    return this._http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteComentario(id : number) : Observable<any>{
      return this._http.delete(this.myAppUrl + this.myApiUrl + id);
  }
  getListComentario(id : number) : Observable<any>{
    return this._http.get(this.myAppUrl + this.myApiUrl + id);
  }
  saveComentario(comentario : comentario) : Observable<any>{
      return this._http.post(this.myAppUrl + this.myApiUrl, comentario);
  }
}
