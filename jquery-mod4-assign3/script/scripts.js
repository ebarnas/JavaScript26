$(document).ready(function() {

    $("#submit").click(function(event){
        event.preventDefault();

        line = $("#fname").val();
        line = line + " " + $("#lname").val();
        line = line + " " + $("#game").val();
        line = line + " " + $("#movie").val() + "<br>";
        $("#answer").append(line);
        $("#fname").val("");
        $("#lname").val("");
        $("#game").val("");
        $("#movie").val("");
    });

    $("#light").click(function() {
        $("h1, h2").removeClass("secondary-headings")
        $("h1, h2").addClass("primary-headings");
        $("#everything").addClass("light");
        $("#everything").removeClass("dark");
    });

    $("#dark").click(function() {
        $("h1, h2").removeClass("primary-headings")
        $("h1, h2").addClass("secondary-headings");
        $("#everything").addClass("dark");
        $("#everything").removeClass("light");
    });

    $("#large").click(function() {
        var currentFontSize = parseInt($("#everything").css('font-size'));
        currentFontSize += 3;
        setFont = currentFontSize + "px"
        $("#everything").css("fontSize", setFont);
    });

    $("#small").click(function() {
        var currentFontSize = parseInt($("#everything").css('font-size'));
        currentFontSize -= 3;
        setFont = currentFontSize + "px"
        $("#everything").css("fontSize", setFont);
    });
});
