// $.getJSON("/gdpData", function(theDataReceived) {
// 	console.log(theDataReceived);
// 	$('.dynamicsparkline').sparkline(theDataReceived); 
// 	// for(var i=0; i<theDataReceived.length; i++) {
// 	// $('body').append(theDataReceived[i].date);
// 	// }
// });
var random = Math.floor(Math.random() * 20);

$.getJSON("https://api.tumblr.com/v2/tagged?tag=trump2016&limit=20&filter=text&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?", function(theDataReceived) { //theDataReceived is the placeholder for the data
	console.log(theDataReceived);
	var trumpPhoto = theDataReceived.response[random].posts.photos[0];

	if(photos !== undefined){
		console.log(trumpPhoto);
		$('body').append(trumpPhoto);
			// pick a random one. if it's a photo, display it. 
			// When the user clicks somewhere on the photo or on a link nearby, it loads another one.
	}
 
});


$.getJSON("https://api.tumblr.com/v2/tagged?tag=puppies&limit=20&filter=text&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?", function(theDataReceived) { //theDataReceived is the placeholder for the data
	console.log(theDataReceived);
	var puppiesPhoto;


});


// 	var imageUrl = theDataReceived.response.posts[0].photos[0].original_size.url;

// 	$("body").append ("<img src='" + imageUrl + "'/>");


// 	for (var i=0; i<theDataReceived.posts.length; i++) { 
// 		// create a variable that stores this really long hierarchy (actually it stores the photos at the end of the hierarchy)
// 		var photos = theDataReceived.response.posts[i].photos; //this post replaces the entire string. makes it easier.
// 		console.log(photos);

// 		//check to see if photos even exist before trying to use them
// 	 	if(photos!== undefined) {
// 	 		var imageUrl = theDataReceived.response.posts[i].photos[0];
// 	 		$("body").append ("<img src='" + imageUrl + "' />"); //add a div tag here in case you want to style  
// 	 }
// }




// // this is an example of concatenation and will help you with the string above.
// var a = "<img src='";
// var b = theDataReceived[i].fileName;
// var c = "' />"

// a + b + c; //concatenation: 