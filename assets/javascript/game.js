$(document).ready(function() {

   
  let randomNumber = Math.floor(Math.random() * 30) +15;
  console.log("Random Number " +randomNumber);
  $(".randomNumber").append(randomNumber);
  totalScore = 0;
$(".btn").on("click", function (){

    randomizer();
})
 
   
 function randomizer() {
    
    totalScore = 0;
    let number1 = 0;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;
   number1 = Math.floor(Math.random() * 10) +1;
  console.log("First rnumber " +number1);
   number2 = Math.floor(Math.random() * 10) +1;
  if (number2 %2 != 0) {
      number2 = number2 +1;
  }
  console.log("Second rnumber " +number2);
   number3 = Math.floor(Math.random() * 10) +1;
  console.log("Third rnumber " +number3);
   number4 = Math.floor(Math.random() * 10) +1;
  console.log("Fourth rnumber " +number4);
   
    
  $(".crystal1").on("click", function() {
    totalScore = totalScore + number1;
    
    console.log("Total Score " +totalScore);
    $(".score").text(totalScore);
    result();
   
  });
  
  $(".crystal2").on("click", function() {
    totalScore = totalScore + number2;
   
    console.log("Total Score " +totalScore);
    $(".score").text(totalScore);
    
    result();
    
  });
  
  $(".crystal3").on("click", function() {
    totalScore = totalScore + number3;    
    console.log("Total Score " +totalScore);
    $(".score").text(totalScore);
    
    result();
    
  });
  
  $(".crystal4").on("click", function() {
    totalScore = totalScore + number4;   
    console.log("Total Score " +totalScore);
    $(".score").text(totalScore);
    
    result();
    
  });

}
 
  let won = 0;
  let loss = 0;

  function result(){
   
if (totalScore == randomNumber) {
    alert("you won");
    won++;
    $(".wins").text("Times won " +won);
    let newRandomNumber = Math.floor(Math.random() * 30) +15;
    $(".randomNumber").text(newRandomNumber);
    console.log("New Random Number " +newRandomNumber);
    randomNumber = newRandomNumber;
    totalScore = 0;
    $(".score").text(totalScore);
    $(".winlosses").css({"background-color":"green"});
    $(".wins").css({"color":"white"});
    $(".losses").css({"color":"white"});
    totalScore = 0;
    
} else if (totalScore > randomNumber) {
      alert("You lost");
      loss++;
      $(".losses").text("Times lost " +loss);
      let newRandomNumber = Math.floor(Math.random() * 30) +15;
      $(".randomNumber").text(newRandomNumber);
      console.log("New Random Number " +newRandomNumber);
      randomNumber = newRandomNumber;
      totalScore = 0;
      $(".score").text(totalScore);
      $(".winlosses").css({"background-color":"red"});
      $(".wins").css({"color":"white"});
      $(".losses").css({"color":"white"});
      
      totalScore = 0;
    }
}

});