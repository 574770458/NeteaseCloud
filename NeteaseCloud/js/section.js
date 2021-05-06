$(document).ready(function() {
    $("#asd").toggle(function() {
            $("#a").css("display", "block");
            $("#asd").css("transform", "rotate(90deg)");
        },
        function() {
            $("#a").css("display", "none");
            $("#asd").css("transform", "rotate(0deg)");
        }
    );
});