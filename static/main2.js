// This is the javascript for page 2 of the site


$.getJSON("https://api.tumblr.com/v2/tagged?tag=donaldtrump&limit=20&filter=text&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?", function(theDataReceived) { //theDataReceived is the placeholder for the data
	console.log(theDataReceived);

	var trumpPhotos = [];

	for(var i=0; i<theDataReceived.response.length; i++) {

		var trumpPhoto = theDataReceived.response[i].photos;

		if(trumpPhoto !== undefined) {
			trumpPhotos.push(trumpPhoto);
		}
	}

	if(trumpPhotos.length > 0) {
		var random = Math.floor(Math.random() * trumpPhotos.length);
		var randomPost = trumpPhotos[random];
		$('#trumpimage').append("<img src='" + randomPost[0].original_size.url + "' />");
	}
	
});


// this will make it so when the user clicks on the picture a new one will load.
$('body').click(function() {
  console.log("it works!");
  $.getJSON("https://api.tumblr.com/v2/tagged?tag=donald+trump&limit=20&filter=text&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&callback=?", function(theDataReceived) { //theDataReceived is the placeholder for the data
	console.log(theDataReceived);

	var trumpPhotos = [];

	for(var i=0; i<theDataReceived.response.length; i++) {

		var trumpPhoto = theDataReceived.response[i].photos;

		if(trumpPhoto !== undefined) {
			trumpPhotos.push(trumpPhoto);
		}
	}

	if(trumpPhotos.length > 0) {
		var random = Math.floor(Math.random() * trumpPhotos.length);
		var randomPost = trumpPhotos[random];
		$('#trumpimage').append("<img src='" + randomPost[0].original_size.url + "' />");
	}
	
});



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