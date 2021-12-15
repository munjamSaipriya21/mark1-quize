var readline=require("readline-sync");
var username=readline.question("what is your name")
var score=0
console.log("welcome to saipriya's quiz")
console.log("welcome"+username)
function check(question,answer,options){
  console.log(question)
  for(var i=0;i<options.length;i++){
  console.log(i+1,options[i])
}
  var useranswer=readline.questionInt("select your options:")
  if (useranswer===currentquestion.answer){
    console.log("you are right")
    score++
  }
  else{
    console.log("you are wrong")
  }
    console.log(" your currentscore "+score)
    console.log("________")
  }

  var questionBank=[
    {question:"where did saipriya staying?",
    options:["Bangalore","hyderabad","delhi","pune"],
    answer:1
    
  },
  {
    question:"what is saipriya's  favourite color?",
    options:["pink","green","yellow","orange"],
    answer:3
  },
  {
    question:"what is saipriya's favourite food?",
    options:["potato","brinjal","lady's finger","egg"],
    answer:4

  },{
      question:"who is  saipriya favourite  hero?",
      options:["prabhas","gopichand","ram","allu-arjun"],
      answer:1
  },
{
    question:"who is saipriya's favourite place ?",
    options:["hyderabad","miryalaguda","banagalore","guntur"],
    answer:2

}]
for (var i=0;i<questionBank.length;i++){
var currentquestion=questionBank[i]
check(currentquestion.question,currentquestion.answer,currentquestion.options)

}
var scorebank=[
  {name:"saipriya",score:2
},{
  name:"Rajitha",score:3

}]
console.log("boom!,if your get  high score send me a screenshot tell me i will update")


for (var i=0;i<scorebank.length;i++){
console.log(scorebank[i].name,scorebank[i].score)
}