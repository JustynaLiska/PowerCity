
// THIS IS MY BANNERS GALLERY

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "assets/03-Web Banners-03.jpg";
images[1] = "assets/02-Web-Banners.jpg";
images[2] = "assets/01-Web-Banners.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


// THIS IS MY PRODUCTS DROP DOWN MENU — DESKTOP

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// THIS IS MY PRODUCTS DROP DOWN MENU — MOBILE

function secondndNavigation() {
  var x = document.getElementById("ndNavigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}