
   	 // Our array of possible computer choices.
    	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
	"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      // Variables for tracking our wins, losses and ties. They begin at 0.
     	var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var letterGuesses = [];
	

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // Determine which key was pressed
        var userGuess = event.key;

        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        //Pressing any key will start the game
        //console.log(userGuess);
        if (userGuess) {
          
          //console.log(guessesLeft);
          //console.log(computerGuess);

          if(guessesLeft >= 0){
    	
    		if (userGuess === computerGuess){
    		wins++;
    		guessesLeft = 9;
    		letterGuesses = [];
  			alert("Wow! You are a psychic.");

   			}

   			else if (userGuess != computerGuess){
   				guessesLeft--;
				letterGuesses.push(userGuess);
   			}

	   		if (guessesLeft === 0) {
	   			//losses++;
	   			alert("Sorry, you're not too good at being a psychic. Try your luck again?");
	   			reset();
   		}
   		};

   			function reset( ) {
   			losses++;
   			letterGuesses = [];
   			guessesLeft = 9; }

   			var total_Guess = " ";

   		 	for (i = 0; i < letterGuesses.length; i++) {
          	
          		if ( total_Guess != " " ) {
          			total_Guess = total_Guess  + " , " + letterGuesses[i]; } 
          		else 
          			{ total_Guess = letterGuesses[i]; }

          	 }

         // Here we create the HTML that will be injected into our div and displayed on the page.
          var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + total_Guess + "</p>"; 
          
          	//console.log(letterGuesses[i])}
          //	console.log(total_Guess);
          "<p>Your guesses so far: " + total_Guess+ "</p>"; 

          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#game").innerHTML = html;

        } 
    }
      


