      //getting the references
      const startBtn1 = document.querySelector(".Phycp1");
      const startBtn2 = document.querySelector(".Phycp2");
      const startBtn3 = document.querySelector(".Phycp3");
      const startBtn4 = document.querySelector(".Phycp4");
      const startBtn5 = document.querySelector(".Phycp5");
      const startBtn6 = document.querySelector(".Chmcp1");
      const startBtn7 = document.querySelector(".Chmcp2");
      const startBtn8 = document.querySelector(".Chmcp3");
      const startBtn9 = document.querySelector(".Chmcp4");
      const startBtn10 = document.querySelector(".Chmcp5");
      const startBtn11 = document.querySelector(".Biocp1");
      const startBtn12 = document.querySelector(".Biocp2");
      const startBtn13 = document.querySelector(".Biocp3");
      const startBtn14 = document.querySelector(".Biocp4");
      const startBtn15 = document.querySelector(".Biocp5");
      const startBtn16 = document.querySelector(".Biocp6");
      
      
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
             startBtn1.onclick = () => {
              infoBox.classList.add("activeInfo");
              Phycp1();
             document.querySelector(".mainCp").style.display = "none"
             }
              startBtn2.onclick = () => {
                infoBox.classList.add("activeInfo");
                Phycp2();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn3.onclick = () => {
                infoBox.classList.add("activeInfo")
                Phycp3();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn4.onclick = () => {
                infoBox.classList.add("activeInfo")
                Phycp4();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn5.onclick = () => {
                infoBox.classList.add("activeInfo")
               Phycp5();
               document.querySelector(".mainCp").style.display = "none"
              }
              startBtn6.onclick = () => {
                infoBox.classList.add("activeInfo")
               Chmcp1();
               document.querySelector(".mainCp").style.display = "none"
              }
              startBtn7.onclick = () => {
                infoBox.classList.add("activeInfo")
               Chmcp2();
               document.querySelector(".mainCp").style.display = "none"
              }
              startBtn8.onclick = () => {
                infoBox.classList.add("activeInfo")
               Chmcp3();
               document.querySelector(".mainCp").style.display = "none"
              }
              startBtn9.onclick = () => {
                infoBox.classList.add("activeInfo")
                Chmcp4();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn10.onclick = () => {
                infoBox.classList.add("activeInfo")
                Chmcp5();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn11.onclick = () => {
                infoBox.classList.add("activeInfo")
                Biocp1();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn12.onclick = () => {
                infoBox.classList.add("activeInfo")
                Biocp2();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn13.onclick = () => {
                infoBox.classList.add("activeInfo")
                Biocp3();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn14.onclick = () => {
                infoBox.classList.add("activeInfo")
                Biocp4();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn15.onclick = () => {
                infoBox.classList.add("activeInfo")
                Biocp5();
                document.querySelector(".mainCp").style.display = "none"
              }
              startBtn16.onclick = () => {
                infoBox.classList.add("activeInfo")
                Biocp6();
                document.querySelector(".mainCp").style.display = "none"
              }
             //exit button click event
             exitBtn.onclick = () => {
              infoBox.classList.remove("activeInfo")//removes info box
              document.querySelector(".mainCp").style.display = ""
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
             timeLine.style.width = time   +"%"
           if(time > 350){
             clearInterval(counterLine)
           };
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
             
//             
// 
//           

let questions =  [];

function Phycp1(){
  
fetch("/S10thCW.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});

}

function Phycp2(){
fetch("/S10thCW2.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Phycp3(){
fetch("/S10thCW3.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Phycp4(){
fetch("/S10thCW4.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Phycp5(){
fetch("/S10thCW5.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Chmcp1(){
fetch("/S10thCW6.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Chmcp2(){
fetch("/S10thCW7.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Chmcp3(){
fetch("/S10thCW8.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Chmcp4(){
fetch("/S10thCW9.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Chmcp5(){
fetch("/S10thCW10.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Biocp1(){
fetch("/S10thCW11.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Biocp2(){
fetch("/S10thCW12.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Biocp3(){
fetch("/S10thCW13.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Biocp4(){
fetch("/S10thCW14.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Biocp5(){
fetch("/S10thCW15.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Biocp6(){
fetch("/S10thCW16.json")
.then(Response => {return Response.json();
})
.then(loadedQuestions => {
questions = loadedQuestions;
})
.catch(error => {
console.error(error);
});
}

function Back(){
  window.location.href = '/Sub10.html';
}

// Push a new state to the browser history
history.pushState(null, null, document.URL);

// Add event listener to handle system back button
window.onpopstate = function(event) {
  // Push another state to prevent going back
  history.pushState(null, null, document.URL);
};


window.onpopstate = function(event) {
  const mainCp = document.querySelector('.mainCp');
  const mainQP = document.querySelector('.mainQP');
  
  
  if(mainCp.style.display == 'none'){
    window.onbeforeunload = function() {
  return "Do you want to exit?";
    }
    
     window.location.href = '/CWQ.html';
};

  
}
 