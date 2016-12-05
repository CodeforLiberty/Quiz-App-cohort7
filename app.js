
// Create your initial state object
var state = {
    
    // Questions
 	questions: [      
{question: 'How does protoypal inhertitance work in JavaScript?',
answerOptions: ['Donald Trump','Hillary Clinton','Bernie Sanders'],
rightAnswer: 0},
 
 {question: 'What is a high order function?',
answerOptions: ['Wim Hof','Nikola Tesla','Chuck Norris'],
rightAnswer: 1},
 
 {question: 'What is the difference between == and === ?',
answerOptions: ['Africa','== checks value and allows coercion, === checks if the value and data type match without coercion'
 ,'North America'],
rightAnswer: '== checks value and allows coercion of the left element to the right elements datatype, === checks if the value and data type match without coercion'
},
 
 {question: 'What value does a variable get if you do not assign it a value?',
answerOptions: ['null','undefined','0'],
rightAnswer: 1},
 
 {question: 'What does bang bang mean (!!) ?',
answerOptions: ['tests if it is true','tests if it is false','superman'],
rightAnswer: 0}
 	],

 	rightAnswerCounter: 0,
 	currentQuestion: 0,

 	route: 'Welcome'
    // Answers
    // Your choice of answer	
    // Message(s) to let them know they have the correct answer	
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
};

// State manipulation functions
// Render functions
function renderNextQuestion(state){

}  
// Event handlers
// When start button is submitted
$('.start').submit(function(event) {
	state.route = 'Started';

});

// Current answer is submitted
$('.answer').submit(function(event) {
});

// Next question
$('.next').click(function(event) {
});

// Restart button is clicked
$('.restart').click(function(event) {
});