
var questionText = document.getElementById("question")
var answerText = document.getElementById("answer")
var text = document.getElementById("kkk")
var questionArray=[];
var answerArray=[];
//console.log(questionArray);

var quizBoxText = document.getElementById("quizBox");
var answerBoxText = document.getElementById("answerBox");
//var randomNum = Math.floor((Math.random() * 5) );
//console.log(randomNum)
showQuestion();
console.log("hi")
console.log(questionArray);
//document.getElementById("kkk").innerHTML = 5 + 6;
setTimeout(function() {
  console.log("async");
  console.log(questionArray);
}, 5000);

//แสดงข้อมูลในนั้น
  /*var data = firebase.database().ref("User");
  data.on('value',function(datasnapshot){
    kkk.innerText = datasnapshot;
  })*/

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
  console.log(questionArray);
  console.log("length is "+questionArray.length)
  var randomNum = Math.floor(Math.random()*(questionArray.length))
  console.log(randomNum)
  console.log(questionArray[randomNum]);
  console.log(answerArray[randomNum]);
})
  
}
function showAnswer(number){

}



function saveOnClick()  
      {
        var questionText = document.getElementById("question");
        var answerText = document.getElementById("answer");
        insertData(questionText.value,answerText.value);
      }


function showData(){
  var firebaseRef = firebase.database().ref();
  firebaseRef.once('value').then(function(datasnapshot){
    console.log(datasnapshot.val());
    //console.log(fi);
  })
}


function insertData(question,answer){
  var firebaseRef = firebase.database().ref("User");
  firebaseRef.push({
    question: question,
    answer: answer
  });
  console.log("Insert Success");
}





