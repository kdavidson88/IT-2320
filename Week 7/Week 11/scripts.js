var Home = {};

Home.Canvas = document.getElementById('carousel');
Home.Context = Home.Canvas.getContext('2d');
var imgArray = new Array();

	imgArray[0]= new Image();
	imgArray[0]= "falcon.jpg";
	imgArray[1]= new Image();
	imgArray[1]= "bat.jpg";
	imgArray[2]= new Image();
	imgArray[2]= "marth.jpg";
	imgArray[3]= new Image();
	imgArray[3]= "gun.jpg";
	imgArray[4]= new Image();
	imgArray[4]= "robin.jpg";
	imgArray[5]= new Image();
	imgArray[5]= "sword.jpg";
	

Home.Animate = function()
{
	Home.Context.clearRect(0, 0, Home.Canvas.width, Home.Canvas.height);
	
	
}
