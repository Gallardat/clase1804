import { Component } from '@angular/core';
import { Pedidos } from '../hijo-formulario/Pedidos';

@Component({
  selector: 'app-padre-lista',
  templateUrl: './padre-lista.component.html',
  styleUrls: ['./padre-lista.component.css']
})
export class PadreListaComponent {
  datoPedido: Pedidos[]=[]

  agregarPedido(p: any){
    this.datoPedido=p
  }
}
