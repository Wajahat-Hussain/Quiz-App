

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    
	[ "Inside which HTML element do we put the JavaScript?", "js", "script", "javascript", "B" ],
	[ "What is the correct syntax for referring to an external script called abc.js?", "script href= abc.js ", "script name= abc.js", "script src= abc.js", "C" ],
	[ "Which of the following event fires when the form element loses the focus: button, input, label, select, textarea?", "onfocus", "onblur", "onclick", "B" ],
	[ " Which of the following is used to explore the Internet?","browser","spreadsheet","clipboard","A"],
    [ "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?", "last()", "put()", "push()", "C" ],
	[ "What does HTML stands for?","Hyperlinks and Text Markup Language","Home Tool Markup Language","Hyper Text Markup Language","C"],
	[" Who is making the Web standards?","The World Wide Web Consortium","Mozilla","Microsoft","A"],
	["Choose the correct HTML tag for the largest heading","h6","h1","heading","B"],
	["  How do I add scrolling text to my page?","scroll","marquee","circular","B"],
	["What is the correct HTML tag for inserting a line break?","break","lb","br","C"]

];
function _(x){
	return document.getElementById(x);
}
/*
function countDown(secs,elem) {
	var element = document.getElementById(elem);
	element.innerHTML = "Your Time Left "+secs+" Seconds";
	if(secs < 1) {
		clearTimeout(timer);
		element.innerHTML = '<h2>Time Out...!!!</h2>';
        		
	}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);

}
*/

var total_seconds = 60*10;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime(){
document.getElementById("quiz-time-left").innerHTML
= 'Your Time Left: ' + c_minutes + ':' + c_seconds ;

if(total_seconds <=0){
setTimeout('document.quiz.submit()',1);
} else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",1000);
}}
setTimeout("CheckTime()",1000);


function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" Questions Correct...</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button id='submit' onclick='checkAnswer()'>Submit Answer</button>";
}


function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);


