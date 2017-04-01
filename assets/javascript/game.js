
	var wordsList = ["owl", "cat", "dog"];

	var win = 0;
	var gessesRemains = 12;
	var selectedWord = "owl";// wordsList[Math.floor(Math.random() * wordsList.length)];



	document.onkeyup = function(event) {

    var   userGesses = event.key;
    
    

    if (selectedWord === "owl") {

    	if (userGesses === "o") {

    	  win++
          
          var html = "<p>Win:" + win + "</p>" ;
		  document.querySelector('#Win').innerHTML = html;

    	}  

    	if (userGesses === "w") {

    	  win++
          
          var html = "<p>Win:" + win + "</p>" ;
		  document.querySelector('#Win').innerHTML = html;


    	}  

    	if (userGesses === "l") {
    	
    	  win++
    	  
          var html = "<p>Win:" + win + "</p>" ;
		  document.querySelector('#Win').innerHTML = html;

    	}

    	if (win === 3) {
		  var html = "<p>You Got it! The Word is owl <br> Click Start New Word to start over!</p>" ;
		  document.querySelector('#wordAlert').innerHTML = html;

    	}

    	if (win > 3){
    		location.reload(); 
    		alert("Start New Word!");
    	}

    	if (userGesses !== "o" && userGesses !== "w" && userGesses !== "l")  {

    		gessesRemains--
              
          var html = "<p>Gesses Remains:" + gessesRemains + "</p>" ;
		  document.querySelector('#gesses').innerHTML = html;

    	}

    	if (gessesRemains === 0) {

    		var html = "<p>Game Over! The Word is owl<br> Click Start New Word to start over!</p>" ;
		  document.querySelector('#wordAlert').innerHTML = html;
    	}

    	if (gessesRemains < 0) {

    		location.reload(); 
    		alert("Start New Word!");
    	}

    } 

    	else { 

    	console.log ("dopaskd")
    						}


	}

	document.getElementById("newWord").onclick = function (event)
	{location.reload();}