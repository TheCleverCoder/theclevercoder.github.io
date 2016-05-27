var main = function() {
	$('.intbtn1').click(function() {

		var game1USRInput = prompt("What's your name?");

		if(game1USRInput.length >= 1) {
			var game1USRInput2 = prompt("Is your name " + game1USRInput + "? (Yes or No)");
			
			if(game1USRInput2.toUpperCase() === "YES"){
				confirm('Great! Nice to meet you ' + game1USRInput + '!');

				var game1USRInput3 = prompt("How has your day been so far? (Great, Good, Okay, Bad, Horrible)").toUpperCase();

				switch(game1USRInput3) {
					case 'GREAT':
						confirm("Great! Glad to hear it!");
						break;
					case 'GOOD':
						confirm("That's a good thing!");
						break;
					case 'OKAY':
						confirm("Nothing out of the ordinary then?");
						break;
					case 'BAD':
						confirm("Sorry I hope it get's better.");
						break;
					case 'HORRIBLE':
						confirm("That's a shame. Sorry to hear that.");
						break;
					default:
						confirm("It looks like you didn't choose one of the options.");
				}
			}

			else if(game1USRInput2.toUpperCase() === "NO") {
				confirm("Sorry did we spell your name wrong? Try Again?");
			}

			else {
			confirm('Sorry! We seem to have an error... Did you type (Yes or No)?');
			}
		}

		else if(game1USRInput.length < 1) {
			confirm('Please input your name!');
		}
	});
};

$(document).ready(main);
