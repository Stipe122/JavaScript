// zdk 1
/*
var izracunaj = (a) => {
    return (b) => {
        return (c) => {
            if (a === "oduzimanje") {
                return b - c;
            }
            else if (a === "mnozenje") {
                return b * c;
            }
            else if (a === "dijeljenje") {
                if (c !== 0) {
                    return b / c;
                } else {
                    console.log("Ne moze se dijeliti s nulom!");
                    return undefined;
                }
            }
            else {
                return b + c;
            }
        }
    }
}

console.log(izracunaj("zbrajanje")(2)(6));
*/

//zdk 2
/*
var zbroji = (a) => {
    var sum = 0;

    var dodaj_vece_od_5 = (a) => {
        if (a > 5) {
            sum += a;
        }
        return dodaj_vece_od_5; // Return the function for chaining
    }

    dodaj_vece_od_5(a); // Call the function with the initial value

    var sljedeci = (b) => {
        if (b !== undefined) {
            dodaj_vece_od_5(b);
            return sljedeci; // Return the function for chaining
        } else {
            return sum;
        }
    }
    return sljedeci;
}

console.log(zbroji(3)(7)(9)(2)()); // Output: 16 (7 + 9)
*/


//zdk 3

const zbroji = (a, b) => {
    let sum = 0;

    const dodaj_parne = (c, d) => {
        if (c % 2 === 0 && d % 2 === 0) {
            sum += c + d;
        }
        return dodaj_parne;
    }

    dodaj_parne(a, b);

    const sljedeci = (e, f) => {
        if (e !== undefined && f !== undefined) {
            dodaj_parne(e, f);
            return sljedeci;
        } else {
            return sum;
        }
    }

    return sljedeci;
}

console.log(zbroji(8,4)(3,4)(2,1)(4,4)(3,5)()); 


































