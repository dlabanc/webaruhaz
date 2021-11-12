$(function () {
  const termekek = [];

  const szuloElem = $("table");
  const sablonElem = $("tr");

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
    for (let index = 0; index < tomb.length; index++) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      const termek = new TermekAdmin(ujElem, termekek[index], index);
    }

    sablonElem.remove();

    $(window).on("termeketTorol", (event) => {
      console.log("Törlés");
      
    });
  }
});
