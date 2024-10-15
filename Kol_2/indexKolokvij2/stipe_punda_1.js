//zdk 1

function Nterokut (br_stranica) {
    this.br_stranica = br_stranica
}

Nterokut.prototype.brojStranica = function() {
    return this.br_stranica
}

Nterokut.prototype.opseg = function(a) {
    let rez = this.br_stranica * a
    return rez
}

nterokut1 = new Nterokut(5)
nterokut2 = new Nterokut(8)

console.log("Broj stranica nterokuta1 je: "+ nterokut1.brojStranica())
console.log("Opseg nterokuta1 je: " + nterokut1.opseg(4))
console.log("Opseg nterokuta2 je: " + nterokut2.opseg(4))

function Trokut() {
    this.br_stranica = 3
}

Trokut.prototype = Object.create(Nterokut.prototype)
Trokut.prototype.constructor = Nterokut

Trokut.prototype.getBr_stranica = function() {
    return this.br_stranica
}

Trokut.prototype.povrsina = function(b) {
    let rez = (1.73/4) * (b*b)
    return rez
}

trokut1 = new Trokut()

console.log ("Broj stranica trokuta je:" + trokut1.getBr_stranica())
console.log ("Povrsina trokuta je: " + trokut1.povrsina(3))







