"use strict";
// Create your initial state object
var state = {

    // Questions
    questions: [      
    {question: 'When you create a button inside of a form without a submit button what will it do?',
    answerOptions: ['It will attach its submit function to it automatically ','??','It will run the buttons code from your Js as expected'],
    rightAnswer: 0},

    {question: 'What is a high order function?',
    answerOptions: ['Wim Hof','Nikola Tesla','Chuck Norris'],
    rightAnswer: 1},

    {question: 'What is the difference between == and === ?',
    answerOptions: ['Africa','== checks value and allows coercion, === checks if the value and data type match without coercion'
    ,'North America'],
    rightAnswer:1
	},

	{question: 'What value does a variable get if you do not assign it a value?',
	answerOptions: ['null','undefined','0'],
	rightAnswer: 1},

	{question: 'What does bang bang mean (!!) ?',
	answerOptions: ['tests if it is true','tests if it is false','superman'],
	rightAnswer: 0}
	],

	right: 0,
	currentQuestion: 0,

	route: 'Welcome'
    
};

// State manipulation functions
// Render functions
function checkAnswer (state) {
var nextButtonCheck = $(".js-question-form input:checked").val();


}

function renderNextQuestion(state){

}  
function renderStart(state){
	var questionNumberUpdate = state.currentQuestion +1; 
    console.log(questionNumberUpdate);
	var possibleAnswers = state.questions[state.currentQuestion].answerOptions;
	 $('.js-welcome').addClass('hidden'); //Hide welcome message
	 $('.js-question').removeClass('hidden');//Show the question
	 $('.js-answer-count').removeClass('hidden');//Display count
	 $('#js-correct-answers').html(state.right);
	 $('#js-total-answers').html(state.questions.length);
	 $('#js-question-number').html(questionNumberUpdate);	
	
	var renderQuestion = $('.js-question').html('<p>Question Number '+ questionNumberUpdate +'</br>'+
	'<span id="js-question-number"></span>'+ state.questions[state.currentQuestion].question + 
	'</p><form class="js-question-form"></form><button id = "next" onclick="nextQuestion();"> NEXT </button><button class="restart">Restart</button>');

	var renderOptions = '<input type="radio" name="answer" value="0" required>'+'<label>'+ possibleAnswers[0] + '</label>' +
		'<br>' + '<input type="radio" name="answer" value="1">' +'<label>' + possibleAnswers[1] + '</label>' + '<br>' +
		 '<input type="radio" name="answer" value="2">' + '<label>'+ possibleAnswers[2] + '</label>' +'<br>'  + 
		 '<input type="radio" name="answer" value="3">'+ '<label>' + possibleAnswers[3] + '</label>';
	var addInput = $('.js-question-form').html(renderOptions);


//document.ready needs to wrap event handlers
}
// Event handlers
// When start button is submitted
$('.js-start').click(function(event) {
	//event.preventDefault();
	//console.log('help');
	//state.route = 'Started';
	state.currentQuestion = 0;
	state.rightAnswerCounter = 0;
	renderStart(state);

});

// // Current answer is submitted
// $('.answer').submit(function(event) {
// });

 //Next question
 function nextQuestion (state) {
 
 var nextButtonCheck = $(".js-question-form input:checked").val();
 console.log(nextButtonCheck);
 };

// // Restart button is clicked
// $('.restart').click(function(event) {
// });