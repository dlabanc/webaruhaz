class Kosar {
  constructor() {
    this.kosarTomb = [];
    var storage = JSON.parse(localStorage.getItem("kivalasztottTermekek"));
    console.log(storage);
    if (storage != null) {
      this.kosarTomb = storage;
      this.megjelenit();
    }
  }

  setKosar(adat) {
    this.kosarTomb.push(adat);

    this.storageTorol();

    this.megjelenit();
  }

  megjelenit() {
    $(".kosar table").html("");
    var txt;

    for (let index = 0; index < this.kosarTomb.length; index++) {
      txt +=
        "<tr><td>" +
        this.kosarTomb[index].nev +
        "</td><td>" +
        this.kosarTomb[index].ar +
        " Ft</td>" +
        "<td><button type='button' class='torol' id=" +
        index +
        ">&#10060;</td></tr>";
    }

    $(".kosar table").html(txt);

    var osszeg = 0;
    this.kosarTomb.forEach((elem) => {
      osszeg += elem.ar;
    });

    $(".torol").on("click", (event) => {
      var id = $(event.target).attr("id");
      this.kosarTomb.splice(id, 1);
      this.megjelenit();

      this.storageTorol();

    });

    $(".kosar p").html("Összesen: " + osszeg + " Ft");
  }

  storageTorol() {
    var JSONadathalmaz = JSON.stringify(this.kosarTomb);
    localStorage.setItem("kivalasztottTermekek", JSONadathalmaz);
  }
}
