import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/*
-La palabra export me permite usar este tipo fuera
 */
export type Producto = {
  nombre: string;
  cantidad: number;
  precio: number;
};

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  total: number = 0;

  @Input() productos: Producto[] = [];
  @Output() ProductoIncrementarCantidad = new EventEmitter<string>();
  @Output() ProductoDecrementarCantidad = new EventEmitter<string>();
  @Output() borrarProducto = new EventEmitter<string>();
  @Output() vaciado = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /** Le dice al padre el nombre del producto a sumar */
  sumarCantidad(nombre: string): void{
    this.ProductoIncrementarCantidad.emit(nombre);
    console.log('suma');
  }

  /** Le dice al padre el nombre del producto a restar */
  restarCantidad(nombre: string): void{
    this.ProductoDecrementarCantidad.emit(nombre);
  }

  /** Obtiene el total a pagar */
  obtenerTotal(): number{
    let result = 0;
    this.productos.forEach( producto => {
      result = result + (producto.precio * producto.cantidad);
    });
    this.total = result;
    return result;
  }

  /** Para borrar un producto en concreto, mediante ouput le indica al padre cual borrar */
  borrarUnProducto(nombreDelProducto: string){

    //this.productos = this.productos.filter(p => p.nombre != nombreDelProducto);
    this.borrarProducto.emit(nombreDelProducto);
    //console.log(nombreDelProducto);
  }

  /** Para el boón vaciar carro y emite el Output con el total a pagar */
  vaciarCarro(): void{
    console.log('1.Pagando carrito');
    this.vaciado.emit(this.total);
  }
}
