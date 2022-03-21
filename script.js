$(document).ready(function(){
    $(".arrow").mouseover(function(){
      $("body").css("background-color", "#EB0974");
    });
    $(".arrow").mouseout(function(){
      $("body").css("background-color", "#F8C24A");
    });


    $("#arrow1").mouseover(function(){
        $("#link1").css("display", "block");
      });
      $("#arrow1").mouseout(function(){
        $("#link1").css("display", "none");
      });

      $("#arrow2").mouseover(function(){
        $("#link2").css("display", "block");
      });
      $("#arrow2").mouseout(function(){
        $("#link2").css("display", "none");
      });

      $("#arrow3").mouseover(function(){
        $("#link3").css("display", "block");
      });
      $("#arrow3").mouseout(function(){
        $("#link3").css("display", "none");
      });

      $("#arrow4").mouseover(function(){
        $("#link4").css("display", "block");
      });
      $("#arrow4").mouseout(function(){
        $("#link4").css("display", "none");
      });

      $("#star").mouseover(function(){
        $("#lab").css("display", "block");
      });
      $("#star").mouseout(function(){
        $("#lab").css("display", "none");
      });
});

  