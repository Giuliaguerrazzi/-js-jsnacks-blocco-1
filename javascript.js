
// Jsnack 1
// var num1 = parseInt (prompt('inserisci numero') );
// var num2 = parseInt (prompt('inserisci numero') );
//
// if (num1 > num2) {
//   console.log(num1);
// }
// else if (num2 < num1) {
//   console.log(num2);
// }
// else {
//   console.log('uguale');
// }

// Jsnack 2
// var parola1 = prompt('inserisci parola');
// var parola2 = prompt('inserisci parola');
//
// if (parola1.length > parola2.length) {
//   console.log(parola2 + ' ' + parola1);
// }
// else if (parola2.length < parola2.length) {
//   console.log(parola1 + ' ' + parola2);
// }
// else {
//   console.log('sono lunghe uguali');
// }

// Jsnak 3
// var somma = 0;
//
// for (var i = 0; i <= 4; i++) {
//   var number = parseInt( prompt('inserisci numero') );
//
//   somma = somma + number;
// }
//
// console.log(somma);

// Jsnack 4
// var invitati = ['pippo', 'minnie', 'topolino', 'paperino', 'pluto'];
//
// var invito = prompt('Il tuo nome è sulla lista?');
//
// var lista = false;
//
// for (var i = 0; i < invitati.length; i++) {
//   var item = invitati [i];
//
//   if (invito == item) {
//     lista = true;
//   }
// }
//
// if (lista == true) {
//   console.log('Invito accettato');
// }
// else {
//   console.log('Invito non accettato');
// }

// Jsnack 5
var arraynumber = [];

for (var i = 0; i < 6; i++) {
  var numero = parseInt( prompt('Inserisci numero') );

  if (numero % 2 != 0) {
    arraynumber.push(numero);
  }
}

console.log(arraynumber);
