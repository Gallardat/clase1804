import { Component,Output,EventEmitter } from '@angular/core';
import { Pedidos } from './Pedidos';
@Component({
  selector: 'app-hijo-formulario',
  templateUrl: './hijo-formulario.component.html',
  styleUrls: ['./hijo-formulario.component.css']
})
export class HijoFormularioComponent {

  pedido: Pedidos[]=[]
  pedidos: Pedidos= new Pedidos("",0,0)

  @Output()  datosPedido = new EventEmitter<Pedidos[]>();

  agregarPedido()
  {
    this.pedido.push(new Pedidos(this.pedidos._nombreCliente,this.pedidos._totalProducto,this.pedidos._importeTotal))
    this.datosPedido.emit(this.pedido)
  }

}
