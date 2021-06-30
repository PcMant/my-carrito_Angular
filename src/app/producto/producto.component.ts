import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../carrito/carrito.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto = {nombre: "", cantidad: 0, precio: 0};
  @Output() borrarProducto = new EventEmitter<string>();
  @Output() ProductoSumaCantidad = new EventEmitter<string>();
  @Output() ProductoRestaCantidad = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  borrarDeLaLista(): void{
    //Genero el evento (borrarProducto) para que el padre lo sepa
    // el recibirá como $event = this.producto.nombre
    this.borrarProducto.emit(this.producto.nombre);
  }

  /** Dice a carrito cual hay que incrementar su cantidad */
  sumarCantidad(): void{
    this.ProductoSumaCantidad.emit(this.producto.nombre);
  }

  /** Dice a carrito cual decrementar */
  restarCantidad(): void{
    this.ProductoRestaCantidad.emit(this.producto.nombre);
  }

}