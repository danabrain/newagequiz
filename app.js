$(document).ready(function() {
  $("#yes").click(function() {
    $(".quizbox").css("display", "none");
    $(".question").show();
  });

  $("#no").click(function() {
    $(".quizbox").css("display", "none");
    $(".unicorn").css("display", "none");
    $(".noquiz").show();
  });

  $("#maybe").click(function() {
    $(".quizbox").css("display", "none");
    $(".unicorn").show();
  })

  $("#restart").click(function() {
    $(".noquiz").css("display", "none");
    $(".quizbox").show();
  });

  $(".navbar").click(function() {
    $(".noquiz").css("display", "none");
    $(".question").css("display", "none");
    $(".unicorn").css("display", "none");
    $(".quizbox").show();
  });

});