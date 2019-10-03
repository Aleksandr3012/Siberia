$('[data-toggle="sidebar"]').click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});