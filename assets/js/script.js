let currentQuestion = 0;
let question_string = document.getElementById('question_string')

let randomlySelectQuestionList = []


// Load the DOM before starting the function to load the game.

//document.addEventListener('DOMContentLoaded', loadGame());
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
}, ]

let geogQuestionList = [{
  "question": "There are 6 colors in the SouthAfrican flag.",
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
}, ]

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
  "question": "Bob, Bruce and Simon and the three Rice Krispies mascots.",
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
}, ]

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
  "question": "The Olympic games are help every 4 years.",
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
  "question": "The Tour de France finishes in Île Saint-Louis each year.",
  "answer": false
}, {
  "question": "A regulation basketball hoop is 18inches in diameter.",
  "answer": true
}, {
  "question": "There were 28 sports included in the 2008 Summer Olympic Games",
  "answer": true
}, ]
// Loop that prints out all the Sports questions.
for (let i of sportQuestionList) {
  let qaObject = (i);
  let sportQuestions = [qaObject.question];

}

function runGame() {

}

function sleep(delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay));
}

async function displaySportQuestion() {
  // document.getElementById('question_string').innerHTML = sportQuestions;

  //Loop that prints out all the General Knowledge questions.

  for (let i of genKnowQuestionList) {
    let genKnowledgeObject = (i);
    let generalKnowledgeQuestions = [genKnowledgeObject.question];
    question_string.innerHTML = generalKnowledgeQuestions;

    let generalKnowledgeAnswers = [genKnowledgeObject.answer];
    console.log(generalKnowledgeQuestions);
    let currentQuestionIndex = 0;
    console.log(currentQuestion);
    console.log(generalKnowledgeAnswers);

    // wait for the timer till 10 seconds
    await sleep(10000);
  }

}


function displayGeneralKnowledgeQuestion() {
  document.getElementById('question_string').innerHTML = generalKnowledgeQuestions;

}
//Check answer function

document.getElementById('checkTrue').addEventListener('click', function (event) {
  fnCheck(true);
})

document.getElementById('checkFalse').addEventListener('click', function (event) {
  fnCheck(false);
})

function fnCheck(answer) {
  let questionAnswer = genKnowQuestionList[currentQuestion].answer;
  console.log(questionAnswer)
  if (questionAnswer === answer) {
    console.log("You got that right.")
  } else {
    console.log("Naaa... thats wrong.")
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// DOM CONTENT LOAD 


// select random 10 question from the main quesiton list via Math.Random
function randomlySelect10Question(params) {
  // get 10 questions selected using math.random and store them in another array
}
randomlySelect10Question()
displaySportQuestion()
fnCheck(answer)