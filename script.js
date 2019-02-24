//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

var user = window.prompt("Enter your name, then click OK");

if (user === "" || user === null) {
  console.log ("Ok, I'll just call you User.");
} else if (user !== "") {
  console.log ("Hi " + user + "!");
}


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  
  var favoriteAuthor = window.prompt("Enter the name of your favorite author - Churchill, Ghandi, Demosthenes - then click OK");

  switch (favoriteAuthor) {
    case "Churchill":
    console.log (speechesArray[0].author + " was " + speechesArray[0].authorAge + " during this speech.");
    break;

    case "Ghandi":
    console.log (speechesArray[1].author + " was " + speechesArray[1].authorAge + " during this speech.");
    break;

    case "Demosthenes":
    console.log (speechesArray[2].author + " was " + speechesArray[2].authorAge + " during this speech.");
    break;

    default:
    console.log ("You did not enter one of the author's names correctly.");
    break;
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});