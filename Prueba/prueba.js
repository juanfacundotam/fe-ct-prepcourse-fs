objetoProducto = {
    precio: 10,
    porcentajeDeDescuento: 0.2
}


// objetoProducto.calcularPrecioDescuento = function() {
//     this.precio -= this.precio * this.porcentajeDeDescuento;
//  }
// objetoProducto.calcularPrecioDescuento()
// console.log(objetoProducto.precio);

// objetoProducto.calcularPrecioDescuento = function() {
//     return this.precio * this.porcentajeDeDescuento;
    
//  }
// var precioTotal = objetoProducto.precio - objetoProducto.calcularPrecioDescuento() 
// console.log(precioTotal);


objetoProducto.calcularPrecioDescuento = function() {
    return this.precio - (this.precio * this.porcentajeDeDescuento);
    
}
console.log(objetoProducto.calcularPrecioDescuento());