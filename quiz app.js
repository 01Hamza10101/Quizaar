      //getting the references
      const startBtn23 = document.querySelector(".PYQ23");
      const startBtn22 = document.querySelector(".PYQ22");
      const startBtn21 = document.querySelector(".PYQ21");
      const startBtn20 = document.querySelector(".PYQ20");
      const startBtn19 = document.querySelector(".PYQ19");
      const startBtn18 = document.querySelector(".PYQ18");
     const startBtn17 = document.querySelector(".PYQ17");
      const startBtn16 = document.querySelector(".PYQ16");
      const startBtn15 = document.querySelector(".PYQ15");
      const startBtn14 = document.querySelector(".PYQ14");
      

      const infoBox = document.querySelector(".info-box")
      const exitBtn = infoBox.querySelector(".buttons .quit")
      const continueBtn = infoBox.querySelector(".buttons .cont")         
      const quizBox = document.querySelector(".quiz-box")
      const nextBtn = quizBox.querySelector(".next");            
      const optionList = quizBox.querySelector(".option-list");    
      const resultBox = document.querySelector(".result-box" )
      const timeCount = quizBox.querySelector(".timer .sec")
      const timeLine = quizBox.querySelector("header .timeline")
      const timeOut = quizBox.querySelector(".timer .text")
      const body = document.getElementsByTagName("body")[0];
 //
 //
 //           
             //start button click event
             startBtn23.onclick = () => {
              infoBox.classList.add("activeInfo");
              PYQ23();
              
              }
              startBtn22.onclick = () => {
                infoBox.classList.add("activeInfo");
                PYQ22();
              }
              startBtn21.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ21();
              }
              startBtn20.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ20();
              }
              startBtn19.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ19();
              }
              startBtn18.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ18();
              }
              startBtn17.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ17();
              }
              startBtn16.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ16();
              }
              startBtn15.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ15();
              }
              startBtn14.onclick = () => {
                infoBox.classList.add("activeInfo")
                PYQ14();
              }
//          

             //exit button click event
             exitBtn.onclick = () => {
              infoBox.classList.remove("activeInfo")//removes info box
              }
//          
            //continue button click event
             continueBtn.onclick = () => {
              infoBox.classList.remove("activeInfo")//removes info box
              quizBox.classList.add("activeQuiz");
              showQuestions(0);
              queCount(1);
              startTimer(30);//so that the time starts from 10
              startTimeLine(0);
              }
//            
//           
//         
            //defining objects
            let que_count = 0;
            let que_numb = 1;
            let counter;
            let counterLine;
            let timeValue = 30;
            let widthValue = 0;
            let userScore = 0;
            
            let tickIcon = '<div class = "icon tick"><i class = "fas fa-check"></i></div>';
            let crossIcon = '<div class = "icon wrong"><i class = "fas fa-times"></i></div>';
//
//      
// 
                //next button click event
                nextBtn.onclick = () => {
                if(que_count < questions.length - 1){
                    que_count++;
                    que_numb++;
                    showQuestions(que_count);
                    queCount(que_numb);
                    clearInterval(counter);
                    clearInterval(counterLine);
                    startTimer(timeValue);
                    startTimeLine(widthValue);
                    nextBtn.style.display = "none";
                    body.classList.remove("right");
                    body.classList.remove("wrong");
                    timeLine.classList.remove("right");
                    timeLine.classList.remove("wrong");
                    
                    }
          else{
             clearInterval(counter);
             clearInterval(counterLine);
             showResultBox();
             quizBox.classList.remove("activeQuiz")//hides quix box
             resultBox.classList.add("activeResult")//shows resultBox
             timeOut.textContent = "Time left"
             
             }
             };
//
//
//   
  //replay button click event
  const replayBtn = resultBox.querySelector(".buttons .restart")  
  replayBtn.onclick = () => {
    quizBox.classList.add("activeQuiz"); //show quiz box
    resultBox.classList.remove("activeResult"); //hide result box
    timeValue = 10;    
    que_count = 0
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); 
    queCount(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimeLine(widthValue); 
    timeOut.textContent = "Time left"; 
    nextBtn.classList.remove("show"); //hide the next button  
    timeLine.classList.remove("right")
    timeLine.classList.remove("wrong") 
    quizBox.classList.remove("oops")
            }; 
//        
//
//                        
 //quit button click event
 const quitBtn = resultBox.querySelector(".buttons .exit")
 quitBtn.onclick = () => {
 window.location.reload( );
            }
//
//
//                   
            //display questions
            function showQuestions(index){
               const queText = document.querySelector(".question");
             
               let queTag = "<span>" +
               questions[index].number + 
               ". " +
               questions[index].question + 
               "</span>"
                
                 let optionsTag =
                 '<div class = "option">' +
                 questions[index].options[0] + 
                 '<span></span></div>' +
                 '<div class = "option">' +
                 questions[index].options[1] +
                 '<span></span></div>' +
                 '<div class = "option">' +
                 questions[index].options[2] + 
                 '<span></span></div>' +
                 '<div class = "option">' +
                 questions[index].options[3] +
                 '<span></span></div>';
                     
                 queText.innerHTML = queTag;
                 optionList.innerHTML = optionsTag;
        
             for (let i of questions) {
             //to randomly sort options
             i.options.sort(() => Math.random() - 0.5);
             }
             const option = optionList.querySelectorAll(".option")
             for(let x = 0; x < option.length ; x++){
             option[x].setAttribute("onclick", "optionSelected(this)")
             }
             };
//                     
//
//          
             //for timer to start counting
             function startTimer(time){
               counter = setInterval(timer, 1000)
             function timer(){
               timeCount.textContent = time;
               time--;
               timeOut.textContent = "Time left" 
              if(time < 9){
               let addZero = timeCount.textContent
               timeCount.textContent = "0" + addZero;
              }
              if(time === 0){
                clearInterval(counter)
                timeCount.textContent = "00";
                timeOut.textContent = "Time Up" 
             
             
             
         let correctAns = questions[que_count].answer;
         let allOptions = optionList.children.length;
         //to automatically select correct option if answer is wrong
for(let x = 0; x < allOptions; x++){
if (optionList.children[x].textContent == correctAns){
optionList.children[x].setAttribute("class", "option correct");             optionList.children[x].insertAdjacentHTML("beforeend",tickIcon);
          }
          }
          //when any option is selected ,all options are disabled 
         for(let x = 0; x < allOptions; x++){
            optionList.children[x].classList.add("disabled");
            }   
nextBtn.style.display = "block";//shows next-button when option is clicked
            };   
            };
            };   
//
//
//
           //for timeline to start moving
           function startTimeLine(time){
             
             counterLine = setInterval(timer, 30.5)
           function timer(){
             time += 1/10;  
             timeLine.style.width = time   +"%";
            if(timer > 350 ){
             clearInterval(counterLine)
           }
           };
           
           };      
           
//
//
//  
          //shows result box
          function showResultBox(){
            infoBox.classList.remove("activeQuiz")//hide info box
            quizBox.classList.remove("activeQuiz")//hide quix box
            resultBox.classList.add("activeResult")//shows resultBox
            body.classList.remove("right")
            body.classList.remove("wrong");
          const scoreText = resultBox.querySelector(".score-text")
          if(userScore == questions.length){
               let scoreTag = '<span>Perfect!! you got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
            }
            else  if(userScore > 70 ){
               let scoreTag = '<span>Congrats! you got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
            }
            else if(userScore > 30){
               let scoreTag = '<span>Nice, you got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
            }
            else{
               let scoreTag = '<span>Sadly, you only got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
             }
             };
//
//
//           
             //count of questions 
             function queCount(index){ 
             const bottomQueCount = quizBox.querySelector(".total-questions");
             
                let totalQuestionsCount =
                '<span><p>' +
                index +
                '</p>of<p>'  +
                questions.length +
                '</p>Questions</span>';
             
                bottomQueCount.innerHTML = totalQuestionsCount      
             };
//        
//    
//               
              //selecting an option
             function optionSelected(answer) {
                clearInterval(counter);//stops time count
                clearInterval(counterLine)//stops timeline movement
                let userAns = answer.textContent;
                let correctAns = questions[que_count].answer;
                let allOptions = optionList.children.length;
                if (userAns == correctAns){
                userScore += 1
                answer.classList.add("correct")
                //to show that question is correct
                answer.insertAdjacentHTML("beforeend", tickIcon)
                body.classList.add("right")
                timeLine.classList.add("right")
                }
                else{
                var myQuizBox = false;
                if (myQuizBox) clearTimeout(myquizBox);
                myQuizBox = setTimeout(function() {quizBox.style.animation = '';}, 500);//so that the animation can continue
                answer.classList.add("incorrect");
                //to show that question is wrong
                answer.insertAdjacentHTML("beforeend", crossIcon);
                quizBox.style.animation = "shake 0.25s 2";
                body.classList.add("wrong");   
                timeLine.classList.add("wrong")      
                window.navigator.vibrate([ 500]);//for phone to vibrate 
   //to automatically select correct option if answer is wrong
   for(let x = 0; x < allOptions; x++){
   if (optionList.children[x].textContent == correctAns){   
   optionList.children[x].setAttribute("class", "option correct");
   optionList.children[x].insertAdjacentHTML("beforeend",tickIcon);
   }
   }
   };               
//when any option is selected ,all options are disabled 
for(let x = 0; x < allOptions; x++){
optionList.children[x].classList.add("disabled");
};   
nextBtn.style.display = "block";//shows next button when option is clicked
             };
             
function navigateToHomePage() {
    window.location.href = "/";
}
             
//             
// 
//           
let questions =  [];

function PYQ23(){
 fetch("PYQ23.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}
//change 
function PYQ22(){
  
fetch("PYQ22.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}

function PYQ21(){
  
fetch("PYQ21.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}
function PYQ20(){
  
fetch("PYQ20.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}
function PYQ19(){
 fetch("PYQ19.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}
//change 
function PYQ18(){
  
fetch("PYQ18.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}

function PYQ17(){
  
fetch("PYQ17.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}
function PYQ16(){
  
fetch("PYQ16.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}

function PYQ15(){
  
fetch("PYQ15.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}

function PYQ14(){
  
fetch("PYQ14.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}


history.pushState(null, null, document.URL);
window.onpopstate = function(event) {
  history.pushState(null, null, document.URL);
};


window.onpopstate = function(event) {
  const quizBox = document.querySelector('.quiz-box');
  if(quizBox.style.display == ''){
    window.onbeforeunload = function() {
  return "Do you want to exit?";
    }
    
     window.location.href = '/quiz app.html';
};

  
}
 