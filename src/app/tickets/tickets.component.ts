import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  
  title='Consumir API';
  usuario='';
  pass='';
  constructor( private usersService: ServicioService) { 
    console.log('El componente se ha creado')
  }

  ngOnInit(): void {
    //this.getTickets();
  }

  getTickets(usuario: string, pass:string){
    this.usersService.ticketsUsuario(usuario, pass).subscribe(response => console.log(response))
  }

}
