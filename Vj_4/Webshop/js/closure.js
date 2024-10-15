
//zdk 1
/*
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

var min = 100;
var max = 200;
var arr = [];

for (var i = 0 ; i < 10 ; i++){
    arr[i] = Math.round(getRandomArbitrary(min,max));
  }
arr.sort();

for (var k = 0 ; k < arr.length ; k++){
    console.log(" " + arr[k] + " ");
}
*/

//zdk 2
/*
const zbrojParnihINeparnih = () => {
    let sumaParnih = 0;
    let sumaNeparnih = 0;
  
    const unosBrojeva = () => {
      const broj = parseInt(prompt("Unesite broj:"));
      if (broj !== 0) {
        if (broj % 2 === 0) {
          sumaParnih += broj;
        } else {
          sumaNeparnih += broj;
        }
        unosBrojeva(); 
      }
    };
  
    unosBrojeva();
  
    return {
      sumaParnih,
      sumaNeparnih
    };
  };
  
  const rezultat = zbrojParnihINeparnih();
  console.log("Zbroj parnih brojeva:", rezultat.sumaParnih);
  console.log("Zbroj neparnih brojeva:", rezultat.sumaNeparnih);
  */

//zdk 3
/*
function kreirajPoruku() {
    const poruka = "Programirati nije teško";
    
    return function() {
      return poruka;
    };
  }

  const porukaClosure = kreirajPoruku();
  
  console.log(porukaClosure()); 
*/

//zdk 4
/*
function sum(a){
    return (b, c) => {
        return a * b * c
    }
 }
let x = sum(10);
console.log(x(3,12));
// ili
console.log(sum(10)(3,12));
*/

// Poziva se funkcija sum(10), koja vraća funkciju koja zahtijeva dva parametra i
// koja mnozi te parametre s 10. Dva parametra dana su 3 i 12. Funkcija ce vratiti
// umnozak brojeva 10, 3 i 12 tj. vraća 360.
//U drugom slučaju svi parametri se odmah šalju u funkciju te dobivamo isti rezultat.


//zdk 5

var multiplyNumbers = (a) => {
    var multiply = (b) => {
        if (!b) {
            return a;
        }
        if (b > 20) {
            b = 1;
            return multiplyNumbers(a * b);
        }
        else {
            return multiplyNumbers(a * b);
        }
    };
    return multiply;
};

console.log(multiplyNumbers(1)(2)(4)()); 
console.log(multiplyNumbers(2)(5)(10)(15)(25)()); 



























