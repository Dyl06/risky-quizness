let quiz = document.getElementById('quiz');
let quizCategories = null;
let currentQuestion = 0;
// Variables containing the arrays with all the questions to be looped through 
// for the game function.
let genKnowQuestionList = [{
  "question": "LG produced the 3310.",
  "answer": false
}, {
  "question": "Elon Musk was born in the United States of America.",
  "answer": false
}, {
  "question": "A group of crows is know as a crowd.",
  "answer": false
}, {
  "question": "Mercury is the closest planet to the sun.",
  "answer": true
}, {
  "question": "There are 42 dots on a pair of dice.",
  "answer": true
}, {
  "question": "Dung Beetles have better strength to weight ratios then ants.",
  "answer": true
}, {
  "question": "The heart is the strongest muscle in the body.",
  "answer": false
}, {
  "question": "Dan Castellaneta performs the voice of Homer Simpson.",
  "answer": true
}, {
  "question": "In Australia: A Bottle-o is a local lager.",
  "answer": false
}, {
  "question": "The eyes are the only body part that are fully grown from birth.",
  "answer": true
}, {
  "question": "Acrophobia is a fear of heights.",
  "answer": false
}, {
  "question": "Sweden has more islands then any other country in the world.",
  "answer": true
}, {
  "question": "An octopus has 3 hearts.",
  "answer": true
}, {
  "question": "26th December is known as Rememberance Day in Ireland.",
  "answer": false
}, {
  "question": "New York hosts the US's busiest airport.",
  "answer": false
}, ];

let geogQuestionList = [{
  "question": "There are 6 colors in the South African flag.",
  "answer": true
}, {
  "question": "Toronto is the capital of Canada.",
  "answer": false
}, {
  "question": "The Mongolian flag is the only flag that doesn't have 4 sides.",
  "answer": false
}, {
  "question": "Rhode Island is the smallest US state by area.",
  "answer": true
}, {
  "question": "Blue and yellow are the colors of the United Nations flag.",
  "answer": false
}, {
  "question": "Dublin is the capital of Ireland.",
  "answer": true
}, {
  "question": "Venezuela is home to the worlds largest waterfall.",
  "answer": true
}, {
  "question": "Albany is the state capital of New York.",
  "answer": true
}, {
  "question": "There are 6 stars on the Chinese flag.",
  "answer": false
}, {
  "question": "Redwoods are the tallest trees in the world.",
  "answer": true
}, {
  "question": "Africa is the only continent that has land in all four hemispheres",
  "answer": true
}, {
  "question": "Africa is host to the worlds largest desert.",
  "answer": false
}, {
  "question": "The Danube river flows through 4 European capitals.",
  "answer": true
}, {
  "question": "The city of Baku is in South America.",
  "answer": false
}, {
  "question": "Holland is a region in the Netherlands.",
  "answer": true
}, ];

let cuisineQuestionList = [{
  "question": "Granny Smiths are a type of pear.",
  "answer": false
}, {
  "question": "Sushi originated in Japan.",
  "answer": false
}, {
  "question": "Peanut Butter is the only food that can never go bad.",
  "answer": false
}, {
  "question": "The Carolina Reaper is considered the hottest chilli-pepper in the world.",
  "answer": true
}, {
  "question": "Mozzarella cheese is traditionally made from the milk of a water buffalo.",
  "answer": true
}, {
  "question": "Bob, Bruce and Simon are the three Rice Krispies mascots.",
  "answer": false
}, {
  "question": "Mageirocophobia is the fear of cooking.",
  "answer": true
}, {
  "question": "Strawberry is the only fruit with seeds on the outside.",
  "answer": true
}, {
  "question": "Salt and pepper are the two most popular spices in the world.",
  "answer": false
}, {
  "question": "There are three measures of Gordon's Gin in a Vesper (James Bond) martini.",
  "answer": true
}, {
  "question": "Cacio & Pepe is a staple of Rome's cuisine.",
  "answer": true
}, {
  "question": "Beaujolais is a type of red wine.",
  "answer": true
}, {
  "question": "Hoisin sauce is not traditionally vegan",
  "answer": false
}, {
  "question": "Italy consumes more coffee then any other country in the world.",
  "answer": false
}, {
  "question": "Guinness is the worlds best selling stout beer.",
  "answer": true
}, ];

let sportQuestionList = [{
  "question": "Simone Biles is a famous swimmer.",
  "answer": false
}, {
  "question": "Wimbledon has a strict all white dress code.",
  "answer": true
}, {
  "question": "Conor McGregor was the highest paid athlete in 2021.",
  "answer": true
}, {
  "question": "The Olympic games are held every 4 years.",
  "answer": true
}, {
  "question": "Football is played during the FIFA World Cup.",
  "answer": true
}, {
  "question": "Sumo Wrestling is the national sport of Japan.",
  "answer": true
}, {
  "question": "Venus Williams has won more tennis grand slams than her sister, Serena.",
  "answer": false
}, {
  "question": "A marathon is 25.6 miles long.",
  "answer": false
}, {
  "question": "1900 was the first year women were allowed to compete in the Modern Olympic games.",
  "answer": true
}, {
  "question": "Greece was host to the first ancient Olympic Games.",
  "answer": true
}, {
  "question": "A regulation NBA basket is 3.02m high.",
  "answer": true
}, {
  "question": "The NFL Hall of Fame is located in the city of Canton.",
  "answer": true
}, {
  "question": "The Tour de France finishes in ??le Saint-Louis each year.",
  "answer": false
}, {
  "question": "A regulation basketball hoop is 18inches in diameter.",
  "answer": true
}, {
  "question": "There were 28 sports included in the 2008 Summer Olympic Games",
  "answer": true
}, ];

// Load the DOM before starting the function to run the game.
document.addEventListener("DOMContentLoaded", function() {
  
  quiz.addEventListener('change', function () {
    quizCategories = quiz.value;
  });
  document.getElementById('start-game').addEventListener('click', function (event) {
      runGame();
  });
});

// Function that loops through the quiz quiestions and runs the game.
async function runGame() {

  switch (quizCategories) {
    case "General Knowledge":
      questionList = genKnowQuestionList;
      break;
    case "Geography":
      questionList = geogQuestionList;
      break;
    case "Cuisine":
      questionList = cuisineQuestionList;
      break;
    default:
      questionList = sportQuestionList;
      break;
  }
// Loop that prints out all the Quiz questions.
  for (let questions of questionList) {                
    let quizQuestions = [questions.question];     
    let questionString = document.getElementById('question_string');
    questionString.innerHTML = quizQuestions;
    startUserTimer();       // Function to start a loop timer for user
    await sleep(8000);      // Function that sets the timer for 8 seconds, before iterating to next question
  }
  
}

//Countdown timer function
// Adapted the timer from code I got from stack overflow. 
function startUserTimer() {
  var timeleft = 8;
  var userTimer = setInterval(function () {
    if (timeleft < 0) {
      clearInterval(userTimer);
      return false;
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " secs remaining";
    }
    timeleft -= 1;
  }, 800);
}

// Function to delay the loop in code before looping to next question.
function sleep(delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay));
}


//Check answer function
function fnCheck(answer) {
  let questionAnswer = questionList[currentQuestion].answer;
  if (questionAnswer === answer) {
    incrementScore();
  } else {
    incrementWrongAnswer();
  }
  currentQuestion = currentQuestion + 1;
}

// Event listeners for the check answer function. 
document.getElementById('checkTrue').addEventListener('click', function (event) {
  fnCheck(true);
});

document.getElementById('checkFalse').addEventListener('click', function (event) {
  fnCheck(false);
});

// Gets the current score and adds one to correct answers
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;
}

// Gets the tally of incorrect answers.
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore;
}

// Reset the game counters back to zero and restart the game. 
  document.getElementById('reset').addEventListener('click', function(){
  document.getElementById('score').innerHTML = 0;
  document.getElementById('incorrect').innerHTML = 0;
  
});
