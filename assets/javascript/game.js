

		var selectedWord;
		var dashedWord = [];
		var userWord = [];
		var guessesRemains = 12;
		var win = 0;
		var losses = 0;
		var  rightGuesses = 0;
		var html2;



		function startOver() {
		var wordsList = ["owl", "cat", "dog"];

		selectedWord = wordsList[Math.floor(Math.random() * wordsList.length)];
		console.log(selectedWord); //for testing
			dashedWord=[];
			userWord = [];
			guessesRemains = 12;
			rightGuesses = 0;

		for (i=0; i < selectedWord.length; i++) {  

		dashedWord.push(" _ ");
	 	document.getElementById("dashedWord").innerHTML = dashedWord.join(" ");



		}
		}




		startOver();

		document.onkeyup = function(event) {

		var userInput = event.key;
		userWord.push (userInput);

		var html = "<h2> Letters Already Guessed:"+ userWord.join(" "); + "</h2>" ;
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
		var html = "<h2> Number of Guesses Remaining: "+ guessesRemains + "</h2>" ;
  	document.querySelector('#guessesRemains').innerHTML = html;

		}
						var html = "<h2> "+ dashedWord.join(" "); + "</h2>" ;
            document.querySelector('#dashedWord').innerHTML = html;

		if (rightGuesses === selectedWord.length) {

			win++
			var html = "<h2> Wins:"+ win + "</h2>" ;
			document.querySelector('#wins').innerHTML = html;
			var html2 = "<h2>You Got It! <br>The Word is " + selectedWord + " <br>Starting a New Word.</h2>" ;
      document.querySelector('#annunciationDiv').innerHTML = html2;
      

			startOver();
				 	
		}

		if (guessesRemains <= 0) {
			losses++
			var html = "<h2> losses:"+ losses + "</h2>" ;
      document.querySelector('#losses').innerHTML = html;
      var html2 = "<h2>Game Over! <br> The Word Was "+ selectedWord +"<br> Starting a New Word.</h2>" ;
      document.querySelector('#annunciationDiv').innerHTML = html2;
			startOver();

		}


		}
