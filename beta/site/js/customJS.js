$( document ).ready(function() {
    $(".md-search").append("<button class=\"test\">Darkmode</button>");
    $(".test").on('click', function () {
      $("body").toggleClass("darkMode");
    });
});
app.document$.subscribe(function() {
  $(".badge").parent().addClass("badgeLine");
});