
//zdk 3

function samoglasnik (str) {
    return new Promise ((resolve, reject) => {
        if (typeof str !== "string") {
            reject("Neispravan unos!")
        }
        else if ( str.length > 1) {
            reject("Vise od jednog slova!")
        }
        else if ( (str.toLowerCase() == "a") || (str.toLowerCase() == "e") || (str.toLowerCase() == "i") || (str.toLowerCase() == "o") || (str.toLowerCase() == "u") ) {
            resolve("Slovo je samoglasnik!")
            }
        else {
            reject("Slovo je suglasnik!")
        }
    })
}

samoglasnik("dwahudw")
.then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  