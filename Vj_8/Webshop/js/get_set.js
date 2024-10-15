// Instancirati dva objekta koristeći konstruktor funkciju koja će opisivati
// Auto s atributima i metodama po želji. Potrudite se da vaše metode imaju
// neku svrhu osim tekstualnog ispisa. U svoje metode uključite atribute 
// kako bi bolje vidjeli primjenu privatnih atributa npr. izračunajte
// potrošnju goriva. Važno je imati barem jedan privatan atribut i jednu 
// privatnu metodu koje ćete  dohvatiti u globalnom scopeu 
// (get, set ili Object.definepropetry()).
// Jednom atributu postavite default vrijednost koju ne trebate prosljeđivati kroz 
// konstruktor.
// Nakon što napravite objekt preko konstruktor funkcije, svoj k𝑜̂d iskoristite i izradite 
// još jedan objekt, ali preko factory funkcije ili klase. Nemojte izostaviti privatne 
// atribute i metode.

function Auto(marka, model, godina, hp) {
    this.marka = marka,
    this.model = model,
    this.godina = godina,
    this.tip = "coupe",
    this.hp = hp

    
    this.info = function() {
        console.log(`Marka: ${this.marka} 
                     Model: ${this.model} 
                     Godina proizvodnje: ${this.godina} 
                     Tip: ${this.tip}
                     Konjaza: ${this.hp}`)
    }

    this.cipiraj = function() {
        this.hp = this.hp + 40;
    }

    this.izr_hp = function() {
        let n = Math.round((2024 - parseInt(godina)) / 3)
        this.hp = this.hp - n
    }
}

class Auto_c {
    #hp = 0
    constructor(marka, model, godina) {
        this.marka = marka,
        this.model = model,
        this.godina = godina,
        this.tip = "coupe"
    }

    info_c = function () {
        console.log(`Marka: ${this.marka} 
                     Model: ${this.model} 
                     Godina proizvodnje: ${this.godina} 
                     Tip: ${this.tip}
                     Konjaza: ${this.hp}`)
    }
    
    get_hp = function() {
        return this.hp;
    }
    set_hp = function(hp) {
        this.hp = hp
    }

    cipiraj_c = function() {
        this.hp = this.hp + 30
    }
}


const auto1 = new Auto("BMW", "e46", "2001", 184)
const auto2 = new Auto("Audi", "A5", "2009", 221)

auto1.info()
auto1.cipiraj()
auto1.info()
auto1.izr_hp()
auto1.info()
auto2.info()

const auto3 = new Auto_c("Mercedes", "202", "1996")
auto3.set_hp(200)
const auto4 = new Auto_c("VW", "Golf 7", "2015")
auto4.set_hp(115)

auto3.info_c()
auto3.cipiraj_c()
auto3.info_c()


































