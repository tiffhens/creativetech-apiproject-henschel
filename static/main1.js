// This will be the javascript page for the home page.

// create an array of terms, and choose a random one each time the user refreshes.

var trumpPhrases =
	"I am an optimist.",
	"I believe that there is hope for the future.",
	"It could always be worse.",
	"The world is a beautiful place.",
	"Life is fantastic. Nothing could possibly ruin my day.",
];

var puppyPhrases = [
	"There is no hope.",
	"Humanity is doomed.",
	"I'm feeling depressed.",
	"I am in a terrible mood and nothing can make it better.",
	"The world is a dark, scary, terrible place.",
];

var randomTrump = trumpPhrases[Math.floor(Math.random()*trumpPhrases.length)];

var randomPuppy = puppyPhrases[Math.floor(Math.random()*puppyPhrases.length)];

console.log(randomTrump);
console.log(randomPuppy);

$('#trump').append("<a href ='/pageTwo'>"+ randomTrump + "</a>");

$('#puppy').append("<a href ='/pageThree'>"+  randomPuppy + "</a>");