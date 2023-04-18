export class Pedidos{
  //propiedades
  _idPedido: number;
  _idCliente: number;
  _nombreCliente: string;
  _totalProducto: number;
  _importeTotal: number;
  static contadorp=0
  static contadorc=0

  constructor(nombreCliente: string, totalProducto:number, importeTotal:number)
  {
    this._idPedido=++Pedidos.contadorp,
    this._idCliente=++Pedidos.contadorc,
    this._nombreCliente=nombreCliente,
    this._totalProducto=totalProducto
    this._importeTotal=importeTotal
  }
}
