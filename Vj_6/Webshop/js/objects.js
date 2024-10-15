// zdk 1
/*
function ocjena(k1, k2, sem){
    //𝑂𝑐𝑗𝑒𝑛𝑎(%) = 0,42*kol1 + 0,42*kol2 + 0,16*semi
    return k1*0.42 + k2*0.42 + sem*0.16
    }
    console.log(`Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`)
    
const ocjena_arrow = (k1, k2, sem) => k1 * 0.42 + k2 * 0.42 + sem * 0.16;

console.log(`Postotak ostvaren na kolegiju ${ocjena_arrow(50, 80, 80)}`);
    

function ocjena_currying(k1) {
    return function(k2) {
        return function(sem) {
            return k1 * 0.42 + k2 * 0.42 + sem * 0.16;
        };
    };
}

console.log(`Postotak ostvaren na kolegiju ${ocjena_currying(50)(80)(80)}`);
*/

// zdk 2
/*
const rezultat_arrow = (Kolegij) => (OstvareniBodovi) => (UkupniBodovi) =>  {
    const postotak = ((OstvareniBodovi / UkupniBodovi) * 100).toFixed(2);
    console.log("Iz kolegija " + Kolegij + " ostvarili ste " + postotak + "% ");
}
rezultat_arrow("PWKS")(25)(35);

function rezultat_currying(Kolegij) {
    return function(OstvareniBodovi) {
        return function(UkupniBodovi) {
            const postotak = ((OstvareniBodovi / UkupniBodovi) * 100).toFixed(2);
            console.log("Iz kolegija " + Kolegij + " ostvarili ste " + postotak + "% ")
        };
    };
}
rezultat_currying("PWKS")(25)(35);
*/

//zdk 3
/*
function mnozi() {
    let rez = 1;

    function pomnozi(broj) {
        if ((broj === undefined) || (broj === 0)) {
            return rez;
        }
        else {
            let ZadnjaZnam = broj % 10;
            if (ZadnjaZnam % 2 === 0) {
                rez = rez * broj;
            }
            return pomnozi;
        }
    }
    for (let i = 0 ; i < arguments.length ; i++) {
        const broj = arguments[i];
        if (broj !== undefined) {
            return pomnozi(broj);
        }
    }
    return pomnozi;
}

const rezultat = mnozi(2)(5)(13)(10)(14)(177)(4)(0);
console.log(rezultat);
*/

// zdk 4, 5, 6

function Kolegij(godina, semestar, kol1, kol2) {
    this.godina = godina;
    this.semestar = semestar;
    this.kol1 = kol1;
    this.kol2 = kol2;
    this.ocjena_rez = null;
}

Kolegij.prototype.ocjena = function() {
    return (this.kol1 * 0.5 + this.kol2 * 0.5);
};

Kolegij.prototype.info = function() {
    if (this.ime && this.prezime && this.status) {
        console.log(`Student ${this.ime} ${this.prezime} (${this.status}) ima ${this.ocjena_rez}%`);
    } else {
        console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`);
    }
};

let kolegij1 = new Kolegij("4", "zimski", 80, 90);
kolegij1.ocjena_rez = kolegij1.ocjena();
kolegij1.info();

let kolegij2 = new Kolegij("2", "ljetni", 0, 0);
kolegij2.ocjena_rez = kolegij2.ocjena();
kolegij2.ime = "Antonio";
kolegij2.prezime = "Becic";
kolegij2.status = "redovni";
kolegij2.info();
delete kolegij2.ime;
delete kolegij2.prezime;
delete kolegij2.status;
kolegij2.info();



























