

window.onload = function() {

    var userScore = 0;
    var compScore = 0;
    var userScore_span = document.querySelector("#user-score");
    var compScore_span = document.querySelector("#comp-score");
    var scoreBoard_div = document.querySelector(".score-board");
    var result_p       = document.querySelector(".result > p");
    var rock_div       = document.querySelector("#rock");
    var paper_div      = document.querySelector("#paper");
    var scissors_div   = document.querySelector("#scissors");
    
    
    function getComputerChoice() {
      var choices = ["piedra", "papel", "tijeras"];
      var randomNumber = Math.floor(Math.random() * 3);
      return choices[randomNumber];
    }
    
    function convertWord(word) {
      switch(word) {
        case "rock":
          return "Piedra";
        case "paper":
          return "Papel";
        case "scissors":
          return "Tijeras";
      }
    }
    
    function win(user, comp) {
      userScore++;
      userScore_span.innerHTML = userScore;
      compScore_span.innerHTML = compScore;
      var smallUserWord = "(usuario)".fontsize(3).sub();
      var smallCompWord = "(PC)".fontsize(3).sub();
      var userChoice_div = document.getElementById(user);
      result_p.innerHTML       = convertWord(user) + smallUserWord + " vence " +
                                 comp + smallCompWord + ". ¡Ganaste!. 🔥";
      userChoice_div.classList.add("green-glow");
      setTimeout(function() {userChoice_div.classList.remove("green-glow");}, 800);
    }
    
    function lose(user, comp) {
      compScore++;
      userScore_span.innerHTML = userScore;
      compScore_span.innerHTML = compScore;
      var smallUserWord = "(usuario)".fontsize(3).sub();
      var smallCompWord = "(PC)".fontsize(3).sub();
      var userChoice_div = document.getElementById(user);
      result_p.innerHTML       = "A "+convertWord(user) + smallUserWord + " lo vence " +
                                 comp + smallCompWord + ". ¡Perdiste!. 💩";
      userChoice_div.classList.add("red-glow");
      setTimeout(function() {userChoice_div.classList.remove("red-glow");}, 800);
    }
    
    function draw(user, comp) {
      var smallUserWord = "(usuario)".fontsize(3).sub();
      var smallCompWord = "(PC)".fontsize(3).sub();
      var userChoice_div = document.getElementById(user);
      result_p.innerHTML       = convertWord(user) + smallUserWord + " empata con " +
                                 comp + smallCompWord + ".";
      userChoice_div.classList.add("gray-glow");
      setTimeout(function() {userChoice_div.classList.remove("gray-glow");}, 800);
    }
    
    function game(userChoice) {
      var compChoice = getComputerChoice();
      switch(userChoice + compChoice) {
        case "rocktijeras":
        case "paperpiedra":
        case "scissorpapel":
        win(userChoice, compChoice);
        break;
        case "rockpepel":
        case "papertijeras":
        case "scissorspiedra":
          lose(userChoice, compChoice);
          break;
        case "rockpiedra":
        case "paperpepel":
        case "scissorstijeras":
          draw(userChoice, compChoice);
          break;
      }
    }
    
    
    
    function main() {
      rock_div.addEventListener("click", function() {
        game("rock");
      });
    
      paper_div.addEventListener("click", function() {
        game("paper");
      });
    
      scissors_div.addEventListener("click", function() {
        game("scissors");
      });
    }
    
    main();
    
    };
    