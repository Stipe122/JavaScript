
alert("Moj prvi JS program!");
console.log("Moj prvi JS program!");

//zdk 1  
/*
function aritmetickaSredina() {
    var broj1 = parseInt(prompt("Unesite prvi prirodni broj:"));
    var broj2 = parseInt(prompt("Unesite drugi prirodni broj:"));
    var broj3 = parseInt(prompt("Unesite treći prirodni broj:"));

    if (isNaN(broj1) || isNaN(broj2) || isNaN(broj3) || broj1 <= 0 || broj2 <= 0 || broj3 <= 0) {
        console.log("Molimo unesite validne prirodne brojeve.");
    }
    else {
        var aritmetickaSredina = (broj1 + broj2 + broj3) / 3;
        console.log("Aritmeticka sredina brojeva je:", aritmetickaSredina);
    }
} 


aritmetickaSredina();
*/

//zdk 2
 /*
function izracunaj(broj1, broj2, operacija) {
    let rezultat;
    
    switch (operacija) {
        case '+':
            rezultat = broj1 + broj2;
            console.log("Zbroj:", rezultat);
            break;
        case '-':
            rezultat = broj1 - broj2;
            console.log("Razlika:", rezultat);
            break;
        case '*':
            rezultat = broj1 * broj2;
            console.log("Umnožak:", rezultat);
            break;
        case '/':
            if (broj2 !== 0) {
                rezultat = broj1 / broj2;
                console.log("Količnik:", rezultat);
            } else {
                console.log("Dijeljenje s nulom nije moguće.");
            }
            break;
        default:
            alert("Operacija nije prepoznata!");
    }
}

izracunaj(5, 3, '+');
izracunaj(8,3,'-');
izracunaj(7,0,'/');
*/

//zdk 3
/*
function prvaZnamenka(broj) {

    if (isNaN(broj)){
        alert("Niste unijeli broj!");
    }
    else {
        let brojString = broj.toString();
        let length = brojString.length;
        if (lenght != 10){
            return ;
        }
    
        let prvaZnamenka = brojString.charAt(0);
        
        console.log("Prva znamenka broja je: " + prvaZnamenka);
        
        return 1;
    }
}

let broj = 1254192518;
prvaZnamenka(broj);
*/

//zdk 4
/*
function provjeriGodisnjeDoba(mjesec) {

    switch (mjesec) {
        case 1:
        case 2:
        case 3:
            alert("Zima");
            break;
        case 4:
        case 5:
        case 6:
            alert("Proljeće");
            break;
        case 7:
        case 8:
        case 9:
            alert("Ljeto");
            break;
        case 10:
        case 11:
        case 12:
            alert("Jesen");
            break;
        default:
            alert("Uneseni mjesec nije važeći.");
            break;
    }
}

var mjesec = parseInt(prompt("Unesite mjesec (broj od 1 do 12):"));
provjeriGodisnjeDoba(mjesec);
*/

//zdk5

function ProvjeriBrojPojavljivanja(n, z) {
    if ( isNaN(n) || isNaN(z)) {
        alert("Pogrešan upis podataka!");
    }
    else {

        var str_n = n.toString();
        var cnt = 0;

        for(let i = 0; i < str_n.length ; i++) {
          if ( str_n[i] == z.toString()){
            cnt++;
             }
        }
    let str_rez = "U broju " + n + " imamo " + cnt + " pojavljivanja broja " + z;
    
    return str_rez;
    }
    
}

var n = 2955;
var z = 5;
console.log(ProvjeriBrojPojavljivanja(n, z))














