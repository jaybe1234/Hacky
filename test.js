/*
var questionArray = [];
var answerArray = [];

setTimeout(function() {
  console.log("async");
  console.log(questionArray);
}, 3000);
getQuiztoArray();

*/

//สำหรับส่งค่าขึ้น firebase
function saveOnClick()  
      {
        var questionText = document.getElementById("question");
        var answerText = document.getElementById("answer");
        insertData(questionText.value,answerText.value);
      }
function insertData(question,answer){
  var firebaseRef = firebase.database().ref("User");
  firebaseRef.push({
    question: question,
    answer: answer
  });
  console.log("Insert Success");
}
/*
function randomNum(n){
  return Math.floor(Math.random()*n)
}
function showQuestion(n){
  return questionArray(n);
}
function showAnswer(n){
  return answerArray(n);
}
function getQuiztoArray(){
  var rootRef = firebase.database().ref().child("User")
  rootRef.on("child_added", snap=> {
  var question = snap.child("question").val();
  var answer = snap.child("answer").val();
  //questionArray.push(question);
  //answerArray.push(answer);
})
}

*/

/*var rootRef = firebase.database().ref().child("User")
rootRef.on("child_added", snap=> {
  var question = snap.child("question").val();
  var answer = snap.child("answer").val();
  console.log("question is " + question);
  console.log("answer is " + answer);
  questionArray.push(question);
  answerArray.push(answer);
  console.log(questionArray);
  console.log(answerArray);
})*/
//console.log(Math.floor(Math.random()*10))
//console.log(questionArray.length)


function showQuestion(){
  var rootRef = firebase.database().ref().child("User")
rootRef.on("child_added", snap=> {
  var question = snap.child("question").val();
  var answer = snap.child("answer").val();
  //console.log("question is " + question);
  //console.log("answer is " + answer);
  questionArray.push(question);
  answerArray.push(answer);
  //console.log(questionArray);
  //console.log("length is "+questionArray.length)
  //var randomNum = Math.floor(Math.random()*(questionArray.length))
  //console.log(randomNum)
  //console.log(questionArray[randomNum]);
  //console.log(answerArray[randomNum]);
})
  
}



function showData(){
  var firebaseRef = firebase.database().ref();
  firebaseRef.once('value').then(function(datasnapshot){
    console.log(datasnapshot.val());
    //console.log(fi);
  })
}




//play

var questionArray = [];
var answerArray = [];
//getDataToArray();


function random(n){
  return Math.floor(Math.random()*n);
}

function getQuestionToArray(){
  var rootRef = firebase.database().ref().child("User")
  rootRef.on("child_added", snap=> {
    var question = snap.child("question").val();
    //console.log("question is " + question);
    //console.log("answer is " + answer);
    questionArray.push(question);
    //console.log(questionArray);
    //console.log("length is "+questionArray.length)
    return questionArray;
})
}
function getAnswerToArray(){
  var rootRef = firebase.database().ref().child("User")
  rootRef.on("child_added", snap=> {

    var answer = snap.child("answer").val();
    //console.log("question is " + question);
    //console.log("answer is " + answer);
    answerArray.push(answer);
    //console.log(questionArray);
    //console.log("length is "+questionArray.length)
    return answerArray;
})
}


function abc()
{
   console.log('abc');
}





