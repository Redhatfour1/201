
//Greeting
var userName = prompt ('What\'s your name?');
// if(userName == null || userName === ''){
//   userName = 'guest';
// }
if (!userName) userName = 'guest';
alert('Hello ' + userName + '. Thanks for coming to my site!');

//Setup //8 questions
var questionArray = ['Did I attend UC Berkeley?', 'Is fullstack development part of my long term goals?', 'Do I currently work as a SDET?', 'Is Paris my dream vacation destination?', 'Do I have a dog named, Eli?', 'What is one of my favorite dishes?', 'Guess a number between 1 to 100', 'What are my favorite food destination cities?'];
// var myAnswerArray = ['yes', 'yes', 'yes', 'yes'];
//# of answers: 9
var inputAnswerArray = ['yes', 'y', 'beef noodle soup', 'prime rib', '88', 'taipei', 'tokyo', 'san sebastian', 'paris'];
var correctCounter = 0;
var incorrectCounter = 0;
//function to execute for loop
function guessingGameLoop(){
  for(var i = 0; i < questionArray.length; i++){
    var answer = prompt(questionArray[i]);

    //verifying typeof answer variable
    if(typeof answer === "string"){
      var inputAnswer = answer.toLowerCase();
      console.log('lowercased');
    }else{
      var inputAnswer = answer;
      console.log('nothing done');
    }
    if((i === 7) && inputAnswerArray.indexOf(inputAnswer) >= 5){
      console.log('That is correct! ' + inputAnswerArray[5] + ', ' + inputAnswerArray[6] + ', ' + inputAnswerArray[7] + ', and ' + inputAnswerArray[8] + ' are the answers');
      correctCounter++;
    }else if(i === 7 && inputAnswerArray.indexOf(inputAnswer) < 5){
      console.log('That is incorrect. Please try again.');
      for(var tryGuesses = 0; tryGuesses <= 4; tryGuesses++){
        var cityGuess = prompt(questionArray[7]);
        if(inputAnswerArray.indexOf(cityGuess) < 5){
          console.log('Incorrect, please try again.');
          incorrectCounter++;
        }else if(inputAnswerArray.indexOf(cityGuess) >= 5){
          console.log('That is correct!');
          correctCounter++;
          break;
        }else{

        }
      }
      console.log(inputAnswerArray[5] + ', ' + inputAnswerArray[6] + ', ' + inputAnswerArray[7] + ', and ' + inputAnswerArray[8] + ' are the answers');
    }else if((i === 6) && inputAnswerArray.indexOf(inputAnswer) === 4){
      console.log('That is correct! ' + inputAnswerArray[4] + ' is the number!');
      correctCounter++;
    }else if(i === 6 && inputAnswerArray.indexOf(inputAnswer) !== 4){
      if(inputAnswer > inputAnswerArray[4] || inputAnswer < inputAnswerArray[4]){
        if(inputAnswer > inputAnswerArray[4]){
          console.log('The guess is too high.');
          incorrectCounter++;
        }else{
          console.log('The guess is too low.');
          incorrectCounter++;
        }for(var guessTries = 0; guessTries <= 2; guessTries++){
          var numberGuess = prompt(questionArray[6]);
          if(numberGuess > inputAnswerArray[4]){
            console.log('The guess is too high.');
            incorrectCounter++;
          }else if(numberGuess < inputAnswerArray[4]){
            console.log('The guess is too low.');
            incorrectCounter++;
          }else if(numberGuess === inputAnswerArray[4]){
            console.log('That is correct!');
            correctCounter++;
            break;
          }else{
          }
        }
        console.log('The correct answer is: ' + inputAnswerArray[4] +'.');
      }
    }
    else if (i === 5 && (inputAnswerArray.indexOf(inputAnswer) === 3 || inputAnswerArray.indexOf(inputAnswer) === 2)){
      console.log('Yum! That is correct!');
      correctCounter++;
    }else if (inputAnswerArray.indexOf(inputAnswer) >= 0 && i <= 4){
      console.log('That is correct!');
      correctCounter++;
    }else{
      console.log('That is incorrect!');
      incorrectCounter++;
    }
    console.log('Correct answers: ' + correctCounter);
    console.log('Incorrect answers: ' + incorrectCounter);
  }
}
