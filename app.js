function chooseGame() {
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
      $("#blankheart").show();
      $("#gettingthere").css("display", "none");
      $("#shining").css("display", "none");
      $(".unicorn").show();
    });
  };

  function startOver() {
  $("#restart").click(function() {
    $(".noquiz").css("display", "none");
    $(".question2").css("display", "none");
    $(".question").show();
  });

  $(".navbar").click(function() {
    $(".noquiz").css("display", "none");
    $(".question").css("display", "none");
    $(".unicorn").css("display", "none");
    $(".question2").css("display", "none");
    $(".quizbox").show();
  });
};

function shineHeart() {
  $("#blankheart").click(function() {
    $("#blankheart").css("display", "none");
    $("#gettingthere").show();
  });

  $("#gettingthere").click(function() {
    $("#blankheart").css("display", "none");
     $("#gettingthere").css("display", "none");
     $("#shining").show();
  });

  $("#shining").click(function() {
    $(".unicorn").css("display", "none");
    $(".quizbox").css("display", "none");
    $(".question").show();
  });
};

 var answerArrayOne = [];
  var answerArrayTwo = [];
  var answerArrayThree = [];

$(document).ready(function() {

  var test = {question:"Why?", one:"Yes", two:"No"};

  document.getElementById("demo");

  chooseGame();

  startOver();

  shineHeart();

  $("#one").click(function() {
    answerArrayOne.push(1);
    console.log(answerArrayOne);
    $(".question").css("display", "none");
    $(".question2").show();
  })

  $("#two").click(function() {
    answerArrayTwo.push(1);
    console.log(answerArrayTwo);
    $(".question").css("display", "none");
    $(".question2").show();
  })

  $("#three").click(function() {
    answerArrayThree.push(1);
    console.log(answerArrayThree);
    $(".question").css("display", "none");
    $(".question2").show();
  })



});