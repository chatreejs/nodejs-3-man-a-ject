$(function () {
    $(".icon-1").click(function () {
        $(".input").toggleClass("active");
        $(".input").focus()
    })

    $(".input").focusout(function () {
        $(".input").toggleClass("active");
    });
});

$(".input-province").on('keyup', function (e) {
    if (e.keyCode == 13) {
        var city = $('.input-province').val()
        location.replace("/weather?q=" + city)
    }
});