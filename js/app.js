// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';

var speakButton = document.querySelector('.speak');
var buttonOne = document.querySelector('.one');
var buttonTwo = document.querySelector('.two');
var buttonThree = document.querySelector('.three');
var buttonFour = document.querySelector('.four');
var buttonFive = document.querySelector('.five');
var buttonSix = document.querySelector('.six');
var buttonSeven = document.querySelector('.seven');

var arrayOne = ["The Turkey","Mom","Dad","Dog","My Teacher","Elephant","The Cat"];
var arrayTwo = ["Sat On","Ate","Danced with","Saw","Doesn't like","kissed"];
var arrayThree = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var arrayFour = ["goat","Monkey","Fish","cow","frog","bug","worm"];
var arrayFive = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

var speechSix;
var speechSeven;

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

buttonOne.onclick = function(){
	speakNow(arrayOne[Math.floor(Math.random() * arrayOne.length)]);	
}
buttonTwo.onclick = function(){
	speakNow(arrayTwo[Math.floor(Math.random() * arrayTwo.length)]);	
}
buttonThree.onclick = function(){
	speakNow(arrayThree[Math.floor(Math.random() * arrayThree.length)]);	
}
buttonFour.onclick = function(){
	speakNow(arrayFour[Math.floor(Math.random() * arrayFour.length)]);	
}
buttonFive.onclick = function(){
	speakNow(arrayFive[Math.floor(Math.random() * arrayFive.length)]);	
}
buttonSix.onclick = function(){
	speechSix = speechSeven;
	speakNow(speechSix);
}
buttonSeven.onclick = function(){
	speechSeven = arrayOne[Math.floor(Math.random() * arrayOne.length)]+arrayTwo[Math.floor(Math.random() * arrayTwo.length)]+arrayThree[Math.floor(Math.random() * arrayThree.length)]+arrayFour[Math.floor(Math.random() * arrayFour.length)]+arrayFive[Math.floor(Math.random() * arrayFive.length)];
	speakNow(speechSeven);
}

