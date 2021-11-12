class Termek {
  constructor(elem, adat, index) {
    this.elem = elem;
    this.adat = adat;
    this.adat.index = index;
  }

  setAdatok(adat) {
    this.nev.html(adat.nev);
    this.kep.attr("src", adat.kep);
    this.leiras.html(adat.leiras);
    this.ar.html(adat.ar);
  }
}

class TermekAdmin extends Termek {
  constructor(elem, adat, index) {
    super(elem, adat, index);

    this.nev = this.elem.children(".nev");
    this.kep = this.elem.children(".kep").children("img");
    this.leiras = this.elem.children(".leiras");
    this.ar = this.elem.children(".ar");
    this.gomb = this.elem.children(".gomb");

    this.setAdatok(this.adat);

    this.gomb.on("click", () => {
      this.sajatEsemeny2();
    });
  }
  sajatEsemeny2() {
    let esemeny = new CustomEvent("termeketTorol", { detail: this.adat }); //<--- Obj. adatait adja vissza
    window.dispatchEvent(esemeny); //<--- Hozzáadom az eseményt a "játéktérhez"
  }
}

class TermekFelhasznalo extends Termek {
  constructor(elem, adat, index) {
    super(elem, adat, index);

    this.nev = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.ar = this.elem.children("span");
    this.gomb = this.elem.children("button");

    this.setAdatok(this.adat);

    this.gomb.on("click", () => {
      this.sajatEsemeny();
    });
  }

  //Esemény létrehozása, ami tud kommunikálni a "játéktérrel".
  sajatEsemeny() {
    let esemeny = new CustomEvent("kosarbaHelyez", { detail: this.adat }); //<--- Obj. adatait adja vissza
    window.dispatchEvent(esemeny); //<--- Hozzáadom az eseményt a "játéktérhez"
  }
}
