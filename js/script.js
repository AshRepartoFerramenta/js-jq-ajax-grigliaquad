$(document).ready(function () {
  $(".square").click(function () {
    var forma = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, stato) {
        console.log(this);
        if (data.response <= 5) {
          $(forma).removeClass("green");
          $(forma).addClass("yellow");
          $(forma).text(data.response);
        } else {
          $(forma).removeClass("yellow");
          $(forma).addClass("green");
          $(forma).text(data.response);
        }
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore." + errori);
      },
    });
  });
});
