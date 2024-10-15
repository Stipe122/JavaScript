// Instancirati dva objekta koristeći konstruktor funkciju koja će opisivati Auto s
// atributima i metodama po želji. Potrudite se da vaše metode imaju neku svrhu osim
// tekstualnog ispisa. U svoje metode uključite atribute kako bi bolje vidjeli primjenu
// privatnih atributa npr. izračunajte potrošnju goriva.
// Važno je imati barem jedan privatan atribut i jednu privatnu metodu koje ćete
// dohvatiti u globalnom scopeu (get, set ili Object.definepropetry()).
// Jednom atributu postavite default vrijednost koju ne trebate prosljeđivati kroz
// konstruktor.
// Nakon što napravite objekt preko konstruktor funkcije, svoj k𝑜̂d iskoristite i izradite
// još jedan objekt, ali preko factory funkcije ili klase. Nemojte izostaviti privatne
// atribute i metode.

function Auto(marka, model, godinaProizvodnje) {
    let kilometraza = 0;

    this.setKilometraza = function(km) {
        if (km >= 0) {
            kilometraza = km;
        } else {
            console.log("Kilometraža ne može biti negativna.");
        }
    };

    this.getKilometraza = function() {
        return kilometraza;
    };

    this.izracunajPotrosnju = function(prijeđenaUdaljenost, potrošnjaNa100km) {
        const potrošenoGorivo = prijeđenaUdaljenost / 100 * potrošnjaNa100km;
        console.log(`Potrošnja goriva za ${prijeđenaUdaljenost} km je ${potrošenoGorivo.toFixed(2)} litara. model: ${info()}`);
    };
    let info = () => `${this.model}`;
    this.setKilometraza(0);

    this.marka = marka;
    this.model = model;
    this.godinaProizvodnje = godinaProizvodnje;
}

const auto1 = new Auto("Mercedes", "A150", 2005);
auto1.izracunajPotrosnju(200, 6);
const auto2 = stvoriAuto("Fiat", "Punto", 2001);
auto2.izracunajPotrosnju(300, 5);

// Napišite konstruktor funkciju za stvaranje objekata koji predstavlja automobil, a
// zatim koristeći prototipove dodajte metode za dodavanje brzine i prikaz trenutne
// brzine automobila.
// Konstruktor funkcija prima četiri argumenta: marku, model, godinu proizvodnje i
// trenutnu brzinu automobila.

function Automobil(marka, model, godina, brzina){
    this.marka = marka;
    this.model = model;
    this.godina = godina;
    this.brzina = brzina;
}

Automobil.prototype.dodajBrzinu = function (brzina) {
    this.brzina += brzina;
}

Automobil.prototype.prikaziBrzinu = function() {
    console.log("Trenutna brzina je " + this.brzina + " km/h.");
}

let mojAutomobil = new Automobil("Toyota", "Camry", 2015, 60);
mojAutomobil.dodajBrzinu(20);
mojAutomobil.prikaziBrzinu(); // Ispisat će "Trenutna brzina je 80 km/h."

// Kreirajte konstruktor funkciju "Vozilo" koja će imati svojstva "marka" i
// "godinaProizvodnje". Ova funkcija će također imati metodu "vozi" koja će ispisati tekst
// "Vozim [marku] vozila godište [godinaProizvodnje]".
// Kreiraj konstruktor funkciju "Automobil" koja će naslijediti svojstva i metodu "Vozilo"
// konstruktor funkcije. Ova funkcija će dodati svojstva "boja" i "brojVrata". Također će
// imati metodu "parkiraj" koja će ispisati tekst "Automobil [marka], [boja] boje je
// parkiran!".
// Kreiraj konstruktor funkciju "Motocikl" koja će također naslijediti svojstva i metodu
// "Vozilo" konstruktor funkcije. Ova funkcija će dodati svojstvo "tip" (npr. sportski,
// cestovni, enduro) i metodu "voziBrzo" koja će ispisati tekst "Vozim motocikl tipa [tip],
// marke [marka] i godište [godinaProizvodnje] brzo!".
// Kreiraj instance objekata "Automobil" i "Motocikl" pomoću konstruktor funkcija.
// Postavi vrijednosti svojstava i pozovi metode.

function Vozilo (marka, godinaProizvodnje){
    this.marka = marka;
    this.godinaProizvodnje = godinaProizvodnje;
}

Vozilo.prototype.vozi = function(){
    console.log("Vozim " + this.marka + " vozila godište " + this.godinaProizvodnje);
}

function Automobil(marka, godinaProizvodnje, boja, brojVrata){
    Vozilo.call(this, marka, godinaProizvodnje);
    this.boja = boja;
    this.brojVrata = brojVrata;
 }

Automobil.prototype = Object.create(Vozilo.prototype);
Automobil.prototype.constructor = Automobil;

 Automobil.prototype.parkiraj = function(){
    console.log("Automobil " + this.marka +  this.boja + "boje je parkiran! ");
}

function Motocikl (marka, godinaProizvodnje, tip){
    Vozilo.call(this, marka, godinaProizvodnje);
    this.tip = tip;
}
Motocikl.prototype = Object.create(Vozilo.prototype);
Motocikl.prototype.constructor = Motocikl;

Motocikl.prototype.voziBrzo = function(){
    console.log("Vozim motocikl tipa " + this.tip + " marke " + this.marka + " i godište " + this.godinaProizvodnje + " brzo!");
}

// Kreiranje instance objekta Automobil
let auto = new Automobil("BMW", 2022, "crne", 5);
auto.vozi(); // Vozim marku vozila BMW godište 2022
auto.parkiraj(); // Automobil BMW, crna boje je parkiran!
// Kreiranje instance objekta Motocikl
let moto = new Motocikl("Honda", 2020, "sportski");
moto.vozi(); // Vozim marku vozila Honda godište 2020
moto.voziBrzo(); // Vozim motocikl tipa sportski, marke Honda i godište 2020 brzo!

// Za početak, kreirajte klasu "Zaposlenik". Ova klasa bi trebala imati sljedeće atribute:
// ime, prezime, email adresa i ocjena sposobnosti. Osim atributa, trebala bi imati
// metodu za ispis (ime, prezime, email) i metodu za ocjenu sposobnosti zaposlenika.
// Sljedeća klasa koju bismo trebali definirati je klasa "Programer". Ova klasa bi trebala
// naslijediti klasu "Zaposlenik" i dodati joj atribut programski jezik.
// Zatim, trebamo definirati klasu "Dizajner" koja nasljeđuje klasu "Zaposlenik" i ima
// dodatan atribut softver.
// Na kraju, trebamo kreirati instance svake klase i pozvati metodu za ispis podataka o
// zaposleniku (zaposlenik, programer, dizajner).

class Zaposlenik {
    constructor(ime, prezime, email, ocjenaSposobnosti) {
    this.ime = ime;
    this.prezime = prezime;
    this.email = email;
    this.ocjenaSposobnosti = ocjenaSposobnosti;
    }

    ocijeniSposobnost(ocjena) {
        this.ocjenaSposobnosti = ocjena;
        }

    ispisi() {
    console.log(`${this.ime},${this.prezime},${this.email}`);
    }
    }

    class Programer extends Zaposlenik {
    constructor(ime, prezime, email, programskiJezik) {
    super(ime, prezime, email);
    this.programskiJezik = programskiJezik;
    }

    ispisi() {
        super.ispisi()
        console.log(`Programski jezik je: ${this.programskiJezik}`)
    }
    }

    class Dizajner extends Zaposlenik {
    constructor(ime, prezime, email, ocjenaSposobnosti, softver) {
    super(ime, prezime, email, ocjenaSposobnosti);
    this.softver = softver;
    }

    ispisi() {
    super.ispisi()
    console.log(`Softver je: ${this.softver}`)
    }
    }

    // Kreiranje instance za klasu "Zaposlenik"
    const zaposlenik1 = new Zaposlenik('Pero', 'Perić', 'pero.peric@example.com', 4);
    zaposlenik1.ispisi(); // Ispisuje "Pero Perić, email: pero.peric@example.com"
    zaposlenik1.ocijeniSposobnost(4);

    // Kreiranje instance za klasu "Programer"
    const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com', 'JavaScript');
    programer1.ispisi(); // Ispisuje "Marko Markić, email: marko.markic@example.com, programski jezik: JavaScript"

    // Kreiranje instance za klasu "Dizajner"
    const dizajner1 = new Dizajner('Ana', 'Anić', 'ana.anic@example.com', 'Adobe Photoshop');
    dizajner1.ispisi(); // Ispisuje "Ana Anić, email: ana.anic@example.com, softver: Adobe Photoshop"

// Dohvatite element s ID-om "prednosti" i promijenite mu pozadinu u žutu boju.
// Dohvatite element s ID-om "prednosti" i promijenite mu tekst u "Ova sekcija je promijenjena korištenjem DOM-a".
var prednosti = document.getElementById("prednosti");
prednosti.style.backgroundColor = "yellow";
prednosti.innerHTML = "Ova sekcija je promijenjena korištenjem DOM-a";

// Dohvatite sve elemente s klasom "odjeljak" i promijenite im veličinu fonta na 16 piksela
var odjeljak = document.getElementsByClassName("odjeljak");
for (var j = 0; j < odjeljak.length; j++) {
  odjeljak[j].style.fontSize = "16px";
}

//Dohvatite sve elemente s oznakom "section" u dokumentu i promijenite im pozadinu u plavu boju.
var section = document.getElementsByTagName("section");
for (var i = 0; i < section.length; i++) {
  section[i].style.backgroundColor = "blue";
}

// Kreirajte gumb koji će mijenjati boju pozadine stranice kada se klikne na njega.
const btn = document.createElement("button");
const btnText = document.createTextNode("Promjeni pozadinu");
btn.appendChild(btnText);

const def = document.getElementById("boja");
def.appendChild(btn);
def.insertBefore(btn, def.children[0]);
btn.addEventListener("click", function () {
  def.style.backgroundColor = "green";
});

// Kreirajte gumb i prazan paragraf. Klikom na gumb, prikažite proizvoljan tekst
// u paragrafu.
var button = document.createElement("button");
const buttonText = document.createTextNode("Prikaži tekst");
button.appendChild(buttonText);

const def2 = document.getElementById("boja");
def2.appendChild(button);
def2.insertBefore(button, def2.children[0]);
button.addEventListener("click", function () {
  def2.innerHTML = "Proizvoljan tekst";
});

// Preuzmite dvije fotografije s interneta. Na stranicu postavite jednu
// fotografiju i gumb "Promijeni sliku". Kada se klikne na gumb, funkcijom onclick
// promijenite src atribut fotografije tako da se prikaže druga fotografija.
const slike = [
    "https://www.bug.hr/img/umjetna-inteligencija-i-top-10-financijski-najperspektivnijih-ai-tvrtki-u-2023_TkxQru.jpg",
    "https://www.umjetnainteligencijaui.com/wp-content/uploads/2023/02/sto-je-umjetna-inteligencija-UI.jpg"
  ];
  
  
  function promijeniSliku() {
    const img = document.getElementById('mojaSlika');
    img.src = img.src === slike[0] ? slike[1] : slike[0];
  }
  
  document.getElementById('promijeniSlikuBtn').addEventListener('click', promijeniSliku);

// Koristeći funkciju onclick, dodajte novi paragraf u postojeći HTML dokument
// s tekstom "Ovo je novi paragraf".
function dodajParagraf() {
    var noviParagraf = document.createElement("p");
    var tekst = document.createTextNode("Ovo je novi paragraf");
    noviParagraf.appendChild(tekst);
    document.getElementById("paragrafi").appendChild(noviParagraf);
  }

//   Napravite funkciju delayedGreeting, koja će koristiti Promise objekt za
// ispisivanje pozdrava nakon određenog vremenskog kašnjenja.
// Funkcija treba prihvatiti vrijeme kašnjenja (u milisekundama) i tekst
// pozdrava kao argumente.
// Nakon zadanog kašnjenja, funkcija treba ispisati tekst pozdrava.
function delayedGreeting(delay, greeting) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(greeting);
        resolve(greeting);
      }, delay);
    });
  }
  
  delayedGreeting(2000, "Pozdrav svima!").then(() => {
    console.log("Pozdrav se ispisuje sa odgodom");
  });

//Napravite funkciju checkWeather, koja će koristiti Promise objekt za
// provjeru vremenskih uvjeta na temelju unesenog grada.
// Funkcija treba prihvatiti ime grada kao argument. U ovom zadatku,
// koristit ćemo jednostavnu simulaciju dohvaćanja podataka o vremenskim
// uvjetima iz API-ja. Ako je vrijeme sunčano, Promise treba biti riješen
// (resolve) s porukom "Vrijeme je sunčano u {grad}". U suprotnom, Promise
// treba biti odbijen (reject) s porukom "Vrijeme nije sunčano u {grad}". 
function checkWeather(city) {
    return new Promise((resolve, reject) => {
      const weatherConditions = ["sunčano", "kišovito", "oblačno", "snježno"];
      const randomCondition =
        weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  
      setTimeout(() => {
        if (randomCondition === "sunčano") {
          resolve(`Vrijeme je sunčano u ${city}`);
        } else {
          reject(`Vrijeme nije sunčano u ${city}`);
        }
      }, 1000); 
    });
  }
  
  checkWeather("Split")
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  
  // PRIMJER ZADATKA SA AWAIT FUNKCIJOM
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function example() {
    console.log("Prije čekanja");
    await delay(2000);
    console.log("Nakon čekanja");
  }
  
  example();

  // PRIMJER ZADATKA SA CALLBACK FUNKCIJON
  function getData(callback) {
    setTimeout(function () {
      const data = { message: "Ovo su podaci" };
      callback(data);
    }, 4000);
  }
  
  function processData(data) {
    console.log("Obrada podataka: ", data.message);
  }
  
  getData(processData);
  console.log("Nastavak izvršavanja");

  // Napišite funkciju calculateAndPrintSum koja prima dva broja a i b.
// Funkcija treba koristiti await funkciju calculateSum kako bi asinkrono
// izračunala zbroj brojeva a i b. Nakon izračuna, ispišite rezultat zbroja.
// Funkcija calculateSum simulira izračun zbroja brojeva s određenim
// vremenskim kašnjenjem. Funkcija calculateSum vraća obećanje (Promise)
// koje se rješava (resolve) s rezultatom zbroja.

  function calculateSum(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sum = a + b;
        resolve(sum);
      }, 1000);
    });
  }
  
  async function calculateAndPrintSum(a, b) {
    const sum = await calculateSum(a, b);
    console.log(`Zbroj brojeva ${a} i ${b} je: ${sum}`);
  }
  
  calculateAndPrintSum(3, 5);

//   Napišite funkciju checkNumber koja prima broj kao argument. Funkcija
//   treba provjeriti je li dani broj paran ili neparan te vratiti odgovarajuću
//   poruku.
//   Koristite obećanje (Promise) s callback funkcijama resolve i reject. Ako
//   je broj paran, obećanje treba biti riješeno s porukom "Broj je paran.".
//   Ako je broj neparan, obećanje treba biti odbijeno s porukom "Broj je
//   neparan.".
//   Pozovite funkciju checkNumber s proizvoljnim brojem i ispišite rezultat
//   korištenjem metoda then za hvatanje riješenog obećanja i metode catch
//   za hvatanje odbijenog obećanja.

function checkNumber(number) {
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        resolve("Broj je paran.");
      } else {
        reject("Broj je neparan.");
      }
    });
  }
  
  checkNumber(4)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  
  checkNumber(7)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });

    // 1. Napisati funkciju koja prima string, zamjeniti velika u mala slova i obrnuto, 
    // ako uneseni string nije ispravan onda vracamo pogresan unos (PROMISE)
    function swapCase(input) {
        return new Promise((resolve, reject) => {
            if (typeof input !== 'string') {
                reject('Pogrešan unos');
                return;
            }
    
            let swapped = '';
            for (let char of input) {
                if (char === char.toUpperCase()) {
                    swapped += char.toLowerCase();
                } else {
                    swapped += char.toUpperCase();
                }
            }
    
            resolve(swapped);
        });
    }
    
    // Primer korišćenja funkcije
    swapCase('HeLLo WoRLD')
        .then(result => console.log(result))  // hEllO wOrld
        .catch(error => console.error(error));
    
    swapCase(12345)
        .then(result => console.log(result))
        .catch(error => console.error(error));  // Pogrešan unos
    

    //Napisati funkciju koja prima broj, i radi Kvadrat broja, ako nije broj vrati pogrešan unos (reject) (PROMISE) (3s)
    function squareNumber(input) {
        return new Promise((resolve, reject) => {
            if (typeof input !== 'number') {
                return reject('Pogrešan unos');
            }
    
            setTimeout(() => {
                resolve(input * input);
            }, 3000);
        });
    }
    
    squareNumber(5)
        .then(result => console.log(result))  // 25 (nakon 3 sekunde)
        .catch(error => console.error(error));
    
    squareNumber('abc')
        .then(result => console.log(result))
        .catch(error => console.error(error));  // Pogrešan unos (nakon 3 sekunde)
    
    //Dohvatiti element iz html dokumenta kojemu je id = "definicija" i dohvatiti tekst unutar elementa, i taj tekst zamjeniti tako da svaki zarez zamjenimo sa smajlicem.
    // Dohvatamo element sa ID-jem "definicija"
    const definicijaElement = document.getElementById('definicija');

    // Dohvatamo tekstualni sadržaj elementa
    const originalText = definicijaElement.textContent;

    // Zamenjujemo sve zareze sa smajlićima
    const modifiedText = originalText.replace(/,/g, '😊');

    // Postavljamo izmenjeni tekst nazad u element
    definicijaElement.textContent = modifiedText;
