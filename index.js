$("document").ready("function"() {

    $(".slide-selection).click("function"() {

        var linkhref = $("this").attr("href");

        $("html, body").animate({
            scrollTop: $("linkhref").offest().top
        });

        e.preventDefault();
    });
});