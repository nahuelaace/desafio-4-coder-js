// Inicializacion de variables acumuladoras
let contMouses = 0;
let contTeclados = 0;
let contMonitores = 0;

// Inicializacion de variables de productos a los que no se les aplica descuento
let cantMousesSinDesc = 0;
let cantTecladosSinDesc = 0;
let cantMonitoresSinDesc = 0;

// Precios de productos
let precioTeclado = 3000;
let precioMouse = 2500;
let precioMonitor = 22000;

// Monto total por cada producto del carrito del cliente
let montoTeclados = 0;
let montoMouses = 0;
let montoMonitores = 0;

// Funcion para agregar productos al carrito
function agregarAlCarrito () {

    do {
        // Muestra de precios y opciones de compra
        let compra = prompt("PRECIOS: \n1. Teclado: $3000 \n2. Mouse: $2500 \n3. Monitor: $22000 \nQue desea comprar? Ej. Para comprar teclados ingrese el 1");
        let cantidad;

        // Acumuladores por cada producto
        switch (compra) {
            // Teclados
            case "1":
                cantidad = parseInt(prompt("Cuantos teclados quiere comprar?"));
                contTeclados = cantidad;
                alert("Usted ha agregado "+cantidad+" teclados a su carrito");
                break;
            // Mouses
            case "2":
                cantidad = parseInt(prompt("Cuantos mouses quiere comprar?"));
                contMouses = cantidad;
                alert("Usted ha agregado "+cantidad+" mouses a su carrito");
                break;
            // Monitores
            case "3":
                cantidad = parseInt(prompt("Cuantos monitores quiere comprar?"));
                contMonitores = cantidad;
                alert("Usted ha agregado "+cantidad+" monitores a su carrito");
                break;
            // Mensaje de dato mal cargado
            default:
                alert("El dato ingresado no coincide con ningun producto en nuestra lista");
                break;
        }

        // Muesta de productos en carrito
        alert("Lista de productos en carrito: \n"+contTeclados+" teclados \n"+contMouses+" mouses \n"+contMonitores+" monitores");
        
        // Confirmacion para seguir comprando
        seguirComprando = confirm("Quiere agregar mas cosas al carrito?");
    } while (seguirComprando);
}

// Funcion que calcula la cantidad de productos que no llevan descuento. ej: si tengo 5 mouses, solo 3 tienen descuento, si tengo 8, solo 6 tienen descuento
function calculoProductosSinDescuento() {
    cantTecladosSinDesc = contTeclados % 3;
    cantMousesSinDesc = contMouses % 3;
    cantMonitoresSinDesc = contMonitores % 3;
}

// Funcion para calcular monto total para cada producto
function calcularMontoPorProducto(cantProducto, cantSinDescuento, precio) {
    let montoTotal

    if (cantProducto<=2) {
        // Si tenemos 2 productos o menos solo se calcula el monto sin descuento
        montoTotal = precio * cantProducto;
    } else {
        // Aqui se le aplica el descuento a los productos que les corresponde
        montoTotal = precio * (cantProducto - cantSinDescuento) * 0.85; 
        // Aqui se suman los productos que no tienen descuento
        montoTotal = montoTotal + precio * cantSinDescuento;
    }
    return montoTotal
}

// Funcion para calcular el total de toda la compra y mostrar por pantalla el pedido
function mostrarPedido() {
    let total = montoMonitores + montoMouses + montoTeclados;
    alert("Pedido registrado \n"+contTeclados+" teclados $"+montoTeclados+"\n"+contMouses+" mouses $"+montoMouses+"\n"+contMonitores+" monitores $"+montoMonitores+"\nTOTAL: $"+total);
}



// Saludo al cliente
alert("Buenas! Somos una tienda de tecnologia \nPor ahora solo vendemos teclados, mouses y monitores \nA continuacion le mostramos nuestra lista de precios");

// Recordatorio de descuentos cada 3 productos
alert("Le recordamos que tenemos una PROMOCION \nCada 3 de un mismo producto usted tendra un 15% de descuento sobre esos 3");

// Agregando productos al carrito
agregarAlCarrito();

// Calculando cuantos productos de cada uno no llevan descuento
calculoProductosSinDescuento();

// Calculo de montos totales por producto
montoTeclados = calcularMontoPorProducto(contTeclados, cantTecladosSinDesc, precioTeclado);
montoMouses = calcularMontoPorProducto(contMouses, cantMousesSinDesc, precioMouse);
montoMonitores = calcularMontoPorProducto(contMonitores, cantMonitoresSinDesc, precioMonitor);

// Muestra de pedido
mostrarPedido();

// Despedida
alert("Gracias por comprar adios!");


