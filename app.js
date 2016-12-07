"use strict";
// Create your initial state object

var state = {
    // Questions
    questions: [{
    	question: 'When you create a button inside of a form without a submit button what will it do?',
    	answerOptions: ['It will attach its submit function to it automatically ','??','It will run the buttons code from your Js as expected'],
    	rightAnswer: 0
    }, {
    	question: 'What is a high order function?',
    	answerOptions: ['Wim Hof','Nikola Tesla','Chuck Norris'],
    	rightAnswer: 1
    }, {
    	question: 'What is the difference <br /> between == and === ?',
    	answerOptions: ['Africa','== checks value and allows coercion, === checks if the value and data type match without coercion'
    	,'North America'],
    	rightAnswer:1
	}, {
		question: 'What value does a variable get if you do not assign it a value?',
		answerOptions: ['null','undefined','0'],
		rightAnswer: 1
	}, {
		question: 'What does bang bang mean (!!) ?',
		answerOptions: ['tests if it is true','tests if it is false','superman'],
		rightAnswer: 0
	}],

	right: 0,
	currentQuestion: 0,
    
};

// State manipulation functions
// Render functions
function checkAnswer (state, selectedAnswer) {
 
	var correctAnswer = state.questions[state.currentQuestion].rightAnswer;


	if (+selectedAnswer === correctAnswer) {

		alert("YOU ARE RIGHT");
		state.right++;
		state.currentQuestion++;
		renderStart(state);
	}
	
	if (selectedAnswer === undefined) {

		alert("Select an answer");
	}
	
	if ( !!selectedAnswer && + selectedAnswer !== correctAnswer) {

		alert("YOU ARE WRONG");
		state.currentQuestion++;
		renderStart(state);
	}
}

function renderEnd(state) {
	$('.js-question').html (`<h1>You finished the Quiz</h1> <br/> <p>You got ${state.right} questions correct out of 
	${state.currentQuestion}</p><br><button class='retry'>Retry</button` );
	$('.js-answer-count').removeClass().addClass('hidden');

}

function renderStart(state){
	if( state.currentQuestion == 5) {

		renderEnd(state);
	}
	var questionNumberUpdate = state.currentQuestion +1; 
	var possibleAnswers = state.questions[state.currentQuestion].answerOptions;
	
	$('.js-welcome').addClass('hidden'); //Hide welcome message
	$('.js-question').removeClass('hidden');//Show the question
	$('.js-answer-count').removeClass('hidden');//Display count
	$('#js-correct-answers').html(state.right);
	$('#js-total-answers').html(state.questions.length);
	$('#js-question-number').html(questionNumberUpdate);	

	$('.js-question').html(`
		<p>
			Question Number <span id="js-question-number">${questionNumberUpdate}</span>
			
		</p> 
		<p> ${state.questions[state.currentQuestion].question} </p>
		
		<form class="js-question-form"></form>
		<button id = "next"> NEXT </button>
		<button class="restart">Restart</button>
	`
	);

	var renderOptions = `
		<input type="radio" name="answer" value="0" required><label> ${possibleAnswers[0]} </label> <br>
		<input type="radio" name="answer" value="1"> <label>${possibleAnswers[1]}</label><br>
		<input type="radio" name="answer" value="2"><label> ${possibleAnswers[2]}</label><br>
		<input type="radio" name="answer" value="3"><label> ${possibleAnswers[3]}</label>
	`;
	
 $('.js-question-form').html(renderOptions);

}
// Event handlers
// When start button is submitted
$('.js-start').click(function(event) {
	event.preventDefault();
	//console.log('help');
	//state.route = 'Started';
	state.currentQuestion = 0;
	state.rightAnswerCounter = 0;
	renderStart(state);

});

$('.js-question.hidden').on('click','#next',function(event)  {
 	event.preventDefault();
 	console.log("HELLLLLLLLLLO");
	var selectedAnswer = $(".js-question-form input:checked").val();
	checkAnswer(state, selectedAnswer);
 }); 

 $('.js-question.hidden').on('click', '.retry, .restart', function(event) {
event.preventDefault();
console.log('checking retry button');
state.currentQuestion = 0;
state.right = 0;
renderStart(state);
 });

