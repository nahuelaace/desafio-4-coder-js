
// Clase pedido
class Pedido{

    // Atributos  de la clase pedido
    constructor(cantidadTeclados, cantidadMouses, cantidadMonitores){

        // Cantidad de productos pedidos
        this.cantidadTeclados = cantidadTeclados;
        this.cantidadMouses = cantidadMouses;
        this.cantidadMonitores = cantidadMonitores;

        // Cantidad de productos sin descuento en el pedido
        this.cantTecladosSinDesc = 0;
        this.cantMousesSinDesc = 0;
        this.cantMonitoresSinDesc = 0;

        // Precios de productos
        this.precioTeclado = 3000;
        this.precioMouse = 2500;
        this.precioMonitor = 22000;

        // Monto total por cada producto del carrito del cliente
        this.montoTeclados = 0;
        this.montoMouses = 0;
        this.montoMonitores = 0;

        // Monto total
        this.montoTotal = 0;
    }
    

    // Metodo que calcula la cantidad de productos que no llevan descuento. ej: si tengo 5 mouses, solo 3 tienen descuento, si tengo 8, solo 6 tienen descuento
    calculoProductosSinDescuento() {
        this.cantTecladosSinDesc = this.cantidadTeclados % 3;
        this.cantMousesSinDesc = this.cantidadMouses % 3;
        this.cantMonitoresSinDesc = this.cantidadMonitores % 3;
    }

    // Metodo que calcula el monto de compra sobre un tipo de producto, y devuelve ese valor
    calcularMontoProducto(cantProducto, cantSinDescuento, precio){
        let montoProducto;

        if (cantProducto<=2) {
            // Si tenemos 2 productos o menos solo se calcula el monto sin descuento
            montoProducto = precio * cantProducto;
        } else {
            // Aqui se le aplica el descuento a los productos que les corresponde
            montoProducto = precio * (cantProducto - cantSinDescuento) * 0.85; 
            // Aqui se suman los productos que no tienen descuento
            montoProducto = montoProducto + precio * cantSinDescuento;
        }

        return montoProducto;
    }
    
    // Metodo para calcular monto total y actualiza los atributos de montos por producto
    calcularMontoTotal() {
        let resultado;

        // Actualiza un atributo de monto por cada vuelta, 3 vueltas
        for (let i = 0; i < 3; i++) {

            switch (i) {
                // Teclados
                case 0:
                    resultado = this.calcularMontoProducto(this.cantidadTeclados, this.cantTecladosSinDesc, this.precioTeclado);
                    this.montoTeclados = resultado;
                    break;
                // Mouses
                case 1:
                    resultado = this.calcularMontoProducto(this.cantidadMouses, this.cantMousesSinDesc, this.precioMouse);
                    this.montoMouses = resultado;
                    break;
                // Monitores
                case 2:
                    resultado = this.calcularMontoProducto(this.cantidadMonitores, this.cantMonitoresSinDesc, this.precioMonitor);
                    this.montoMonitores = resultado;
                    break;
                default:
                    break;
            }

            // Actualiza monto total de compra
            this.montoTotal = this.montoTotal + resultado;
        }
        
    }

    // Metodo para reguistrar el pedido
    confirmarPedido(){
        this.calculoProductosSinDescuento();
        this.calcularMontoTotal();
        this.mostrarPedido();
    }

    // Metodo mostrar por pantalla el pedido registrado
    mostrarPedido(){
        alert("Pedido registrado \n"+this.cantidadTeclados+" teclados $"+this.montoTeclados+"\n"+this.cantidadMouses+" mouses $"+this.montoMouses+"\n"+this.cantidadMonitores+" monitores $"+this.montoMonitores+"\nTOTAL: $"+this.montoTotal);
    }
    
}

// Clase de carrito
class Carrito{

    // Atributos donde se guarda la cantidad de productos que se van a comprar
    constructor() {
        this.contMouses = 0;
        this.contTeclados = 0;
        this.contMonitores = 0;
    }
    
    // Metodo para agregar productos al carrito
    agregarAlCarrito(){
        do {

            // Muestra de precios y opciones de compra
            let compra = prompt("PRECIOS: \n1. Teclado: $3000 \n2. Mouse: $2500 \n3. Monitor: $22000 \nQue desea comprar? Ej. Para comprar teclados ingrese el 1");
            let cantidad;
    
            // Acumuladores por cada producto
            switch (compra) {
                // Teclados
                case "1":
                    cantidad = parseInt(prompt("Cuantos teclados quiere comprar?"));
                    if (cantidad && (cantidad >= 0)) {
                        this.contTeclados = this.contTeclados + cantidad;
                        alert("Usted ha agregado "+cantidad+" teclados a su carrito");
                    } else {
                        alert("El dato ingresado no es valido")
                    }
                    
                    break;
                // Mouses
                case "2":
                    cantidad = parseInt(prompt("Cuantos mouses quiere comprar?"));
                    if (cantidad && (cantidad >= 0)) {
                        this.contMouses = this.contMouses + cantidad;
                        alert("Usted ha agregado "+cantidad+" mouses a su carrito");
                    } else {
                        alert("El dato ingresado no es valido")
                    }
                    
                    break;
                // Monitores
                case "3":
                    cantidad = parseInt(prompt("Cuantos monitores quiere comprar?"));
                    if (cantidad && (cantidad >= 0)) {
                        this.contMonitores = this.contMonitores + cantidad;
                        alert("Usted ha agregado "+cantidad+" monitores a su carrito");
                    }else{
                        alert("El dato ingresado no es valido")
                    }
                    
                    break;
                // Mensaje de dato mal cargado
                default:
                    alert("El dato ingresado no coincide con ningun producto en nuestra lista");
                    break;
            }
    
            // Muesta de productos en carrito
            alert("Lista de productos en carrito: \n"+this.contTeclados+" teclados \n"+this.contMouses+" mouses \n"+this.contMonitores+" monitores");            
            
        } while (confirm("Quiere agregar mas cosas al carrito?"))
    }

}


// Saludo al cliente
alert("Buenas! Somos una tienda de tecnologia \nPor ahora solo vendemos teclados, mouses y monitores \nA continuacion le mostramos nuestra lista de precios");

// Recordatorio de descuentos cada 3 productos
alert("Le recordamos que tenemos una PROMOCION \nCada 3 de un mismo producto usted tendra un 15% de descuento sobre esos 3");

// Agregando productos al carrito
const carrito = new Carrito();
carrito.agregarAlCarrito();

// Mostrando pedido resgistrado
const pedido = new Pedido(carrito.contTeclados,carrito.contMouses,carrito.contMonitores);
pedido.confirmarPedido();

console.log(pedido);

// Despedida
alert("Gracias por comprar adios!");


