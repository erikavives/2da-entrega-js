//Carrito de compra 

let ingreseNombre= prompt("ingrese su nombre");
function saludo(nombre){
    console.log("Hola " + " " + nombre);
}
saludo(ingreseNombre);

class producto{
    constructor(nombre, precio){
        this.nombre= nombre;
        this.precio= precio;
    }
}

const redDeadRedemption= new producto("Red dead redemption", 6000);
const fifa= new producto("Fifa", 17450);
const cyberpunk= new producto("cyberpunk", 2400);
const superMario= new producto("Super Mario", 14000);
const battlefield = new producto("Battlefield", 9999);
const eldenRing= new producto("Elden Ring", 6000);


const arrayProductos = [redDeadRedemption, fifa, cyberpunk, superMario, battlefield, eldenRing];
console.log("array productos en Stock: ");
console.log(arrayProductos);

//Agregar juegos 
const sims= new producto(prompt("ingrese un juego"), parseInt(8000) );
alert("el precio del juego es de 8000")
arrayProductos.push(sims);
console.log("nuevo juego: ");
console.log(arrayProductos);

//filtrado 

const arrayProductosMenor10000= arrayProductos.filter(producto => producto.precio < 10000);
console.log("Productos con precio menor a 10000: ");
console.log(arrayProductosMenor10000);
//Total carrito
let totalPrecio=arrayProductosMenor10000.reduce((acumulador,producto) => acumulador + producto.precio, 0);
console.log("Precio total del carrito: ")
console.log(totalPrecio);
