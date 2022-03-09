import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  

  private BASE_URL = "https://rickandmortyapi.com/api/";

  constructor(private http: HttpClient) {
    console.log('Servicio HTTP:')
  }
  

  ticketsUsuario (usuario : string, pass : string) {
    return this.http.post(this.BASE_URL + `api/v1/getTickets/?user=${usuario}&pass=${pass}` , {})
  }

}
