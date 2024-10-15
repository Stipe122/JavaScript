/*
//zdk 1
var arr = [2, 4, 5, 6, 8, 10, 22];

//dodaj element na pocetak niza

arr.splice(0,0,1);

//dodaj element na kraj niza

arr[arr.length] = 25;

//dodaj element na predzadnje mjesto niza

arr.splice(arr.length, 0, 14);

//izbrisi drugi element niza

arr.splice(1,1);

//izbrisi zadnji element niza

arr.pop();

//izmjeni drugi element

arr.splice(1,1,42);

//zbroji sve elemente niza

var sum = 0;
for (var i = 0 ; i < arr.length ; i++){
    sum = sum + arr[i];
}
console.log("Zbroj svih elemenata niza je: " + sum);

// ispiši sve elemente niza koristeći se FOR petljom


for (var k = 0 ; k < arr.length ; k++){
    console.log(" " + arr[k] + " ");
}
*/

//zdk 2

var trgovina = [
    {naziv_proizvoda: "bmw", godina_proizvodnje: "2001", cijena: 10, kolicina: 4, popust: 10},
    {naziv_proizvoda: "audi", godina_proizvodnje: "2007", cijena: 15, kolicina: 8, popust: 15},
    {naziv_proizvoda: "mercedes", godina_proizvodnje: "1988", cijena: 50, kolicina: 2, popust: 5}
]

const proizvodi_ispod_pedeset = trgovina.filter(proizvod => proizvod.cijena < 50).map(proizvod => proizvod.naziv_proizvoda);

console.log("Nazivi proizvoda s cijenom manjom od 50 su: ");
for (var j = 0 ; j < proizvodi_ispod_pedeset.length ; j++){
    console.log(" " + proizvodi_ispod_pedeset[j] + " ");
}

//zdk 3

const uk_kolicina = trgovina.reduce((ukupno, proizvod) => ukupno + proizvod.kolicina, 0);

console.log("Ukupna kolicina proizvoda u trgovini:", uk_kolicina);


//zdk 4

const naziviTrgovina = trgovina.map(proizvod => proizvod.naziv_proizvoda);

console.log("Nazivi trgovina:");
naziviTrgovina.forEach(naziv => console.log(naziv));

//zdk 5

// Funkcija koja provjerava je li broj pozitivan ili negativan
const provjeriPozitivnost = broj => broj >= 0 ? true : false;

// Funkcija koja provjerava parnost broja
const provjeriParnost = broj => broj % 2 === 0 ? "Pozitivan" : "Negativan";

// Funkcija koja računa kub broja
const kubBroja = broj => broj ** 3;

// Funkcija koja ispisuje poruku "Hello World!"
const ispisiPoruku = () => console.log("Hello World!");


console.log(provjeriPozitivnost(5));
console.log(provjeriParnost(4)); 
console.log(kubBroja(3)); 
ispisiPoruku(); 










