import { Component } from '@angular/core';
import { Producto, TiposProducto } from '../Producto';

@Component({
  selector: 'app-padre-formulario',
  templateUrl: './padre-formulario.component.html',
  styleUrls: ['./padre-formulario.component.css']
})
export class PadreFormularioComponent {

  producto: Producto[]=[]
  p: Producto= new Producto("",0,0,TiposProducto.alimentacion)
// pasar como objeto al hijo
  tipoP=Object.values(TiposProducto)
  agregarProducto()
  {
    let pro= new Producto(this.p._nombre,this.p._cantidad,this.p._precio,this.p._tipo)
    this.producto.push(pro)

  }

}
