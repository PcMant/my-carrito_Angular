import { Component, OnInit } from '@angular/core';
import { Producto } from '../carrito/carrito.component';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  
  productos: Producto[] = [];
  newProducto: Producto = { nombre: '', cantidad: 0, precio: 0 };
  total: number = 0;

  constructor() {}

  ngOnInit() {}

  /** Añade los productos */
  addProducto(): void {

    let repe: number = this.productos.findIndex(p => p.nombre == this.newProducto.nombre);
    let vacio: boolean = true;

    this.newProducto.nombre.length > 0 ? vacio = false : vacio = true;

    if(vacio){
      alert('Debes de introducir un nombre de producto.');
    }else if(repe > -1){
      alert('Este producto ya ha sido introducido anteriormente. \n No se puede introducir productos repetidos.');
    }else{
      // Es para meter en la lista "productos"
      this.productos.push(this.newProducto);
    }

    console.log(this.newProducto);
    this.newProducto = { nombre: '', precio: 0, cantidad: 0 };
  }

  borrarDeLaListaUnProducto(nombreDelProducto: string) {
    this.productos = this.productos.filter(p => p.nombre != nombreDelProducto);
    //console.log(nombreDelProducto);
  }

  /** Realiza el pedido y vacia el carro mostrando el total pagado */
  vaciarCarro(p: number): void {
    
    if(this.productos.length > 0){
      this.productos = [];
      alert(`Gracias por su pedido. \n Has pagado ${p} €`);
      console.log('2.pedido realizado');
    }

  }

  /** Aumento de en 1 de un producto en contreto */
  sumarCantidad(nombre: string): void{

    let pos = this.productos.findIndex(producto => producto.nombre == nombre);
    
    if(pos >= 0){
      this.productos[pos].cantidad++;
    }
    console.log("Incrementando cantidad");

  }

  /** Decremento en 1 de un producto en concreto */
  restarCantidad(nombre: string): void{
    
    let pos = this.productos.findIndex(producto => producto.nombre == nombre);
    
    if(pos >= 0 && this.productos[pos].cantidad > 1){
      this.productos[pos].cantidad--;
    }
    console.log("Decrementando cantidad");

  }

}
