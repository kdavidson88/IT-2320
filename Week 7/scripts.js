var vidGames =
{
"games" : [
	{
		"title" : "Mass Effect",
		"genre" : "Third-Person Shooter",
		"date" : "March 6, 2012",
		"character" : "Shepard",
		"weapon" : [
			{
			 "Primary" : "Kessler",
			 "Secondary" : "Lancer",
			}
		]	
	},
	{
		"title" : "Resident Evil",
		"genre" : "Survival Horror",
		"date" : "March 22, 1996",
		"character" : "Chris Redfield",
		"weapon" : [
			{
			 "Primary" : "Nine-Oh-Nine",
			 "Secondary" : "Bear Commander",
			}
		]
	},
	{
		"title" : "Halo",
		"genre" : "First-Person Shooter",
		"date" : "November 15, 2001",
		"character" : " Master Chief",
		"weapon" : [
			{
			 "Primary" : "M6D Personal Defense Weapon",
			 "Secondary" : "MA5B Individual Combat Weapon",
			}
		]
	},
	{
		"title" : "Final Fantasy 7",
		"genre" : "Role-Playing Game",
		"date" : "January 31, 1997",
		"character" : "Cloud Strife",
		"weapon" :	[
			{
			 "Primary" : "Buster Sword",
			 "Secondary" : "Ultima Weapon",
			}
		]
	}
]
}

$(document).ready(function()
{
	for(i = 0; i < vidGames.games.length; i++)
	{
		var game = vidGames.games[i];
		for(j = 0; j < game.weapon.length; j++)
		{
			var weap = game.weapon[j];
			document.getElementById("showMeTheJSON").innerHTML += "<br>" +
				game.title + "<br>" +
				game.genre + "<br>" + 
				game.date + "<br>" + 
				game.character + "<br>" + "<em>" +
				 "Primary: " + weap.Primary + "<br>" + "<em>" + 
				 "Secondary: " + weap.Secondary +"<br><hr>"
		}			
			
	}
})