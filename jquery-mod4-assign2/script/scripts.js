$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

$(document).ready(function(){
  $("#fade").click(function(){
    $("#cat").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $("#slide").click(function(){
    $("#cs").slideToggle("slow");
    $("#cstext").slideToggle("slow");
  });
});