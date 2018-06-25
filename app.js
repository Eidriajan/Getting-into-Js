/* --- Tipos de console.()
var a = 1;
var b = "Adrian";

console.log(a)
console.warn(a)
console.error(a)
console.info(a)
*/
/* --- JavaScript no es Asincrono.
function imprimir() {
	for (var i = 0; i < 1000; i++) {
		console.log('Imprimio');
	}
}
function presionoClick() {
	console.log("Click en boton");
}

imprimir();
*/ 
/* --- Escritura dinamica - Tipos Primitivos
var num = 10; //Numero
var str = "Texto"; //Texto
var bol = true; //Boleado: True, false.
var und = undefined; //Indefinido
var nul = null;

var obj = {
	numero: 10,
	texto: "Nuevo texto",

	objHijo: {
		numero2: 20,
		texto2: "Nuevo texto 2"
	}
};

console.log(obj);
*/
/* --- Por Valor y por Referencia
var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

var c = {
	nombre: "Juana"
}

var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Pedro";

console.log("c: ", c);
console.log("d: ", d);
*/