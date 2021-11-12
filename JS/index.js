$(function () {
  const termekek = [];

  const szuloElem = $("article");
  const sablonElem = $(".termek");

  adatbeolvasas("termekek.json", termekek, peldanyosit);

  //beolvassuk az adatokat ajax-szal.
  function adatbeolvasas(fajlnev, tomb, myCallback) {
    $.ajax({
      url: fajlnev,
      success: function (result) {
        result.forEach((elem) => {
          tomb.push(elem);
        });
        console.log(termekek);
        myCallback(tomb);
      },
    });
  }

  function peldanyosit(tomb) {

    const kosar = new Kosar();

    $(window).on("kosarbaHelyez", (event) => {
      kosar.setKosar(event.detail);
    });

    for (let index = 0; index < tomb.length; index++) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const termek = new TermekFelhasznalo(ujElem, termekek[index], index);
    }

    sablonElem.remove();
  }
});
