$(document).ready(function() {
    $(".resume").on("click", function(){
        alert("You have downloaded my resume!");
    });
    $(".slide-selection").click(function() {
        var linkhref = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(linkhref).offset().top
        });
    });
});