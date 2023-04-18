export class Producto{



  _idProducto: number;
   static contador = 0;
  _nombre: string;
  _cantidad: number;
  _precio: number;
  _tipo: TiposProducto;

  constructor( nombre: string, cantidad: number, precio: number, tipo: TiposProducto)
  {
    this._idProducto=++Producto.contador
    this._nombre=nombre,
    this._cantidad=cantidad,
    this._precio=precio,
    this._tipo=tipo
  }


}
export enum TiposProducto{
  alimentacion="alimentacion",
  bebidas="bebidas",
  limpieza="limpieza",
  higiene="higiene"
}
