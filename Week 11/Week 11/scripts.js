var Home = {};

Home.Canvas = document.getElementById('carousel');
Home.Context = Home.Canvas.getContext('2d');
Home.MX = 0;
Home.MY = 0;

Home.Image1 = new Image();
Home.Image2 = new Image();
Home.Image3 = new Image();
Home.Image4 = new Image();
Home.Image5 = new Image();
Home.Image6 = new Image();

Home.Image1.src = "falcon.jpg";
Home.Image2.src = "bat.jpg";
Home.Image3.src = "marth.jpg";
Home.Image4.src = "gun.jpg";
Home.Image5.src = "robin.jpg";
Home.Image6.src = "sword.jpg";


/*//Image Array Declarations
var picArray = new Array();
picArray[0] = new Image();
picArray[1] = new Image();
picArray[2] = new Image();
picArray[3] = new Image();
picArray[4] = new Image();
picArray[5] = new Image();

picArray[0].src = "falcon.jpg";
picArray[1].src = "bat.jpg";
picArray[2].src = "marth.jpg";
picArray[3].src = "gun.jpg";
picArray[4].src = "robin.jpg";
picArray[5].src ="sword.jpg";*/

Home.Canvas.onmousemove = function(event)
{
	if(event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}
	
	Home.MX = mouseX;
	Home.MY = mouseY;
}


	

Home.MoveImages = function()
{
	Home.Context.clearRect(0, 0, Home.Canvas.width, Home.Canvas.height);
	
	Home.Context.drawImage(Home.Image1, 10, 35, 225, 225);
	Home.Context.drawImage(Home.Image2, 300, 35, 225, 225);
	Home.Context.drawImage(Home.Image3, 600, 35, 225, 225);
	Home.Context.drawImage(Home.Image4, 900, 35, 225, 225);
	Home.Context.drawImage(Home.Image5, 1200, 35, 225, 225);
	Home.Context.drawImage(Home.Image6, 1500, 35, 225, 225);
	
	
		
	requestAnimFrame(function() { Home.MoveImages(); });
}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
	Home.MoveImages();
});