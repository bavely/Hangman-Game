

		var selectedWord;
		var dashedWord = [];
		var userWord = [];
		var guessesRemains = 12;
		var win = 0;
		var losses = 0;
		var  rightGuesses = 0;
		var html2;
		var audio = new Audio("./assets/imges/Level_Up.mp3");
		audio.loop = true;
		audio.play();

		function startOver() {


			var wordsList = ["owl", "cat", "dog", "bear", "wolf", "horse" , "lion", "tiger", "deer", "giraffe", "goat" ];

			selectedWord = wordsList[Math.floor(Math.random() * wordsList.length)];
			console.log(selectedWord); //for testing
				dashedWord=[];
				userWord = [];
				guessesRemains = 12;
				rightGuesses = 0;

			for (i=0; i < selectedWord.length; i++) {  

			dashedWord.push(" _ ");
		 	document.getElementById("dashedWord").innerHTML = dashedWord.join(" ");

		 	document.getElementById("guessesRemains").innerHTML ="<h4> Number of Guesses Remaining: "+ guessesRemains + "</h4>";


								}
		}




		startOver();

		document.onkeyup = function(event) {
			var click = new Audio("./assets/imges/click.wav");
			click.play();
			var userInput = event.key;
			userWord.push (userInput);
			if (userInput === userWord[userWord.length-2]){
				console.log(userWord[userWord.length-1]);
				var html = "<h4> Letters Already Guessed: <br>"+ userWord.join(" "); + "</h4>" ;
				document.querySelector('#guesses').innerHTML = html;
			}
			else{
			var html = "<h4> Letters Already Guessed: <br>"+ userWord.join(" "); + "</h4>" ;
			document.querySelector('#guesses').innerHTML = html;

			if (selectedWord.indexOf(userInput) > -1){

			rightGuesses++

			for (var i = 0; i < selectedWord.length ; i++) {           

			if(userInput === selectedWord[i]){

			dashedWord[i]=userInput;
			}
		}
		}

		else {

		guessesRemains--
		var html = "<h4> Number of Guesses Remaining: "+ guessesRemains + "</h4>" ;
  	document.querySelector('#guessesRemains').innerHTML = html;

		}
						var html = "<h4> "+ dashedWord.join(" "); + "</h4>" ;
            document.querySelector('#dashedWord').innerHTML = html;

		if (rightGuesses === selectedWord.length) {

			win++
			var html = "<h4> Wins:"+ win + "</h4>" ;
			document.querySelector('#wins').innerHTML = html;
			var html2 = "<h4>You Got It! <br>The Word is " + selectedWord + " <br>Starting a New Word.</h4>" ;
      document.querySelector('#annunciationDiv').innerHTML = html2;
      

			startOver();
				 	
		}

		if (guessesRemains <= 0) {
			losses++
			var html = "<h4> losses:"+ losses + "</h4>" ;
      document.querySelector('#losses').innerHTML = html;
      var html2 = "<h4>Game Over! <br> The Word Was "+ selectedWord +"<br> Starting a New Word.</h4>" ;
      document.querySelector('#annunciationDiv').innerHTML = html2;
			startOver();

		}

		}
		}
