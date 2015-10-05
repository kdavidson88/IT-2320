//Create Main Object
var Library = {};


//Create Constructor
Library.Game = function (title, genre, dateCreate, mainChar, weapon)
{
	this.title = title;
	this.genre = genre;
	this.dateCreate = dateCreate;
	this.mainChar = mainChar;
	this.weapon = weapon;
	
	this.ChangeWeapon = function(weapon)
	{
		if (this.weapon == "Pistol")
		{
			this.weapon = "Knife";
		}
	}
}


//var games = 
//{
	Library.MassEffect = new Library.Game("Mass Effect, ", "Third-Person Shooter, ", "March 6, 2012, ", "Shepard, ", "Pistol");
	Library.ResidentEvil = new Library.Game("Resident Evil, ", "Third-Person Shooter, ", "March 22, 1996, ", "Chris Redfield, ", "Pistol");
	Library.Halo = new Library.Game("Halo, ", "First-Person Shooter, ", "November 15, 2001, ", "Master Chief, ", "Rifle");
	Library.LegendOfZelda = new Library.Game("The Legend of Zelda: OOT, ", "Action-Adventure, ", "February 21, 1986, ", "Link, ", "Sword");
	Library.SSB = new Library.Game("Super Smash Brothers, ", "Brawler, ", "January 21, 1999, ", "Nintendo Characters, ", "Variety");
	Library.FF7 = new Library.Game("Final Fantasy 7, ", "Role-Playing Game, ", "January 31, 1997, ", "Cloud Strife, ", "Buster Sword");
//};


//Create function to retrieve information from the created objects
Library.Game.prototype.GetStats = function()
{
	return this.title + " " + this.genre + " " + this.dateCreate + " " + this.mainChar + " " + this.weapon;
}


/*window.onload(function()
{
	for(i = 0; i < games.length; i++)
	{
		write.GetStats(i);
	}
})*/

//Display objects on screen
document.body.innerHTML = Library.MassEffect.GetStats();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Library.ResidentEvil.GetStats();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Library.Halo.GetStats();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Library.LegendOfZelda.GetStats();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Library.SSB.GetStats();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Library.FF7.GetStats();
document.body.innerHTML += "<br/>";


//Invoke function within Constructor
Library.MassEffect.ChangeWeapon();
Library.ResidentEvil.ChangeWeapon();

//Display what the function changed
document.body.innerHTML += "<br>";
document.body.innerHTML += "<br>";
document.body.innerHTML += "<br>";
document.body.innerHTML += Library.MassEffect.GetStats();
document.body.innerHTML += "<br>";
document.body.innerHTML += Library.ResidentEvil.GetStats();


