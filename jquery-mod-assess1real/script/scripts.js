$(document).ready(function(){
  $("#slide").click(function(){
    $("#cs").slideUp(5000);
  });
  $("#stop").click(function(){
    $("#cs").stop();
  });
});

$(document).ready(function(){
  $("#callback").click(function(){
    $("#hide").hide("slow", function(){
      alert("The callback has occurred");
    });
  });
});

$(document).ready(function(){
  $("#changer").click(function(){
    $("#changing").css("color", "red").slideUp(2000).slideDown(2000);
  });
});

$(document).ready(function() {

    $("#up").click(function() {
        $("#move").animate({
            marginTop: "-=10px"
        });
    });

    $("#down").click(function() {
        $("#move").animate({
            marginTop: "+=10px"
        });
    });

    $("#left").click(function() {
        $("#move").animate({
            marginLeft: "-=10px"
        });
    });

    $("#right").click(function() {
        $("#move").animate({
            marginLeft: "+=10px"
        });
    });
});