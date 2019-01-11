window.onload = function()
{
  var title = document.createTextNode("Welcome to the Chunin Exam!");
  var element = document.createElement("h1");
  element.appendChild(title);
  setTimeout(function(){document.body.appendChild(element);},1000);
  title = document.createTextNode("Are you ready?");
  element2 = document.createElement("h1");
  element2.appendChild(title);
  setTimeout(function(){document.body.appendChild(element2);},3000);
  var list = document.createElement("ol");
  var text = document.createTextNode("The game has 3 parts:");
  list.appendChild(text);
  setTimeout(function(){document.body.appendChild(list);},5000);
  var l1 = document.createElement("li");
  text = document.createTextNode("The first one is a quick quiz test to see if you are really willing to become a ninja! It will test your knoweledge about the ninja world. You need 6 points to pass. If you fail, you'll go back to the Academy and stay a Genin forever!");
  l1.appendChild(text);
  setTimeout(function(){list.appendChild(l1);},6000);
  var l2 = document.createElement("li");
  text = document.createTextNode("The second part is a game which test your ability to survive under rough conditions! Only those who are really determinated will pass!");
  l2.appendChild(text);
  setTimeout(function(){list.appendChild(l2);},13000);
  var l3 = document.createElement("li");
  text = document.createTextNode("The last part will decide if you are ment to be a ninja or not. You'll see at the end!");
  l3.appendChild(text);
  setTimeout(function(){list.appendChild(l3);},17000);
  var button = document.createElement("button");
  text = document.createTextNode("Start!");
  button.appendChild(text);
  button.addEventListener("click",StartGame);
  setTimeout(function(){document.body.appendChild(button);},20000);
}

var Questions = null;
/*
function fetchJSONFile(path, callback) 
{
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() 
 {
    if (httpRequest.readyState === 4) 
    {
      if (httpRequest.status === 200) 
      {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) 
        {
          callback(data);
        }
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send(); 
}
window.onload = function()
{
   fetchJSONFile("E:\\Facultate\\TW\\Proiect\\Questions.json", function(data){
   Questions = data;
 });
}*/

function StartGame(source)
{
  var display = document.createElement("div");
  display.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
  display.style.color = "white";
  display.style.textShadow = "black 1px 1px";
  display.style.textAlign = "center";
  display.style.height = "700px";
  display.style.width = "100%";
  display.style.overflow = "auto";
  display.style.marginTop = "10px";
  display.setAttribute("id","display");
  // display.addEventListener("load",Round1);
  document.body.appendChild(display);
  event.target.style.display = "none";
  Round1();
}
function Round1()
{
  var display = document.getElementById("display");
  

  var str =  `[
    {
        "question": "Who are Naruto's parents?",
        "answers":[
        "Jiraiya & Tsunade",
        "Kushina & Minato",
        "Mikoto & Fugaku"
        ],
        "correctAnswer": "Kushina & Minato"
    },
    {
        "question": "Who beat Naruto in talk-no-jutsu?",
        "answers":[
        "Sasuke",
        "Itachi",
        "Kakashi"
        ],
        "correctAnswer": "Itachi"
    },
    {
        "question": "Who is Naruto in love with? But Sakura?",
        "answers":[
        "Sasuke",
        "Sakura & Sasuke",
        "Hinata & Lee"
        ],
        "correctAnswer": "Sasuke"
    },
    {
        "question": "Who is Kakashi's best friend?",
        "answers":[
        "Sakura Haruno",
        "Iruka",
        "Obito Uchiha"
        ],
        "correctAnswer": "Obito Uchiha"
    },
    {
        "question": "What is the best jutsu the Uchiha clan had?",
        "answers":[
        "Izanami",
        "Izanagi",
        "Katon: Goukakyuu no jutsu"
        ],
        "correctAnswer": "Izanami"
    },
    {
        "question": "How many jutsus uses Naruto?",
        "answers":[
        "2",
        "8",
        "34"
        ],
        "correctAnswer": "2"
    },
    {
        "question": "Who is Madara Uchiha's rival?",
        "answers":[
        "Hashirama",
        "Tobirama",
        "Karin"
        ],
        "correctAnswer": "Hashirama"
    },
    {
        "question": "Who is Hinata?",
        "answers":[
        "Naruto's sister",
        "Naruto's wife",
        "Sasuke's wife"
        ],
        "correctAnswer": "Naruto's wife"
    }
  ]
`
  Questions = JSON.parse(str);
  var title = document.createElement("h1");
  title.innerText = "Round 1";
  title.style.textShadow = "black 1px 1px";
  display.appendChild(title);
  for(var i=0; i<Questions.length; i++)
  {
    var q = document.createElement("div");
    q.setAttribute("class","question");
    var qText = Questions[i].question;
    q.innerText = qText;
    display.appendChild(q);
    for(nr in Questions[i].answers)
    {
      var input = document.createElement("input");
      input.setAttribute("type","radio");
      var text = Questions[i].answers[nr];
      input.setAttribute("value",text);
      input.setAttribute("name",i);
      input.setAttribute("id","radioAnswer");
      display.appendChild(input);
      var toAddLabel =  document.createElement('label');
      toAddLabel.innerText = text;
      display.appendChild(toAddLabel);
      display.appendChild(document.createElement('br'));
    }
    display.appendChild(document.createElement('br'));
  }
  var submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  display.appendChild(submitButton);
  submitButton.addEventListener("click",SubmitAnswers);
  var count = 25;
  var timer = setInterval(function() 
  {
    console.log(count);
    count--;
    if(count === 0 && !submitButton.onclick)
    {
      stopInterval();
    }
  }, 1000);
}
var nrRightAnswers = 0;
function SubmitAnswers()
{
  var radioAnswer = document.querySelectorAll('#radioAnswer');
  for(var i=0; i<radioAnswer.length; i++)
  {
    if(radioAnswer[i].checked && radioAnswer[i].value == Questions[radioAnswer[i].name].correctAnswer)
    {
      nrRightAnswers++;
    }
  }
  if(nrRightAnswers<6)
  {
    Exit();
  }
  else
  {
    var congratsText = document.createElement("h1");
    congratsText.innerHTML = "Congratulations!"; 
    var display = document.getElementById("display");
    display.appendChild(congratsText);
    congratsText = document.createElement("h3");
    congratsText.innerHTML = "Move on to round 2 to become a real ninja!";
    display.appendChild(congratsText);
    var round2Button = document.createElement("button");
    round2Button.setAttribute("id","round2button");
    round2Button.innerText = "Round 2";
    var cancelButton = document.createElement("button");
    cancelButton.innerText = "I give up";
    display.appendChild(round2Button);
    display.appendChild(cancelButton);
    round2Button.addEventListener("click",Round2);
    cancelButton.addEventListener("click",Exit);
  }
  
}

function Exit()
{
  var display = document.getElementById("display");
  display.innerHTML = "";
  var disappointment = document.createElement("h1");
  disappointment.innerHTML = "YOU FAILED! GO BACK TO THE ACADEMY FOR EVER!";
  display.appendChild(disappointment);
}
var stopInterval = function() 
{
  clearInterval(timer);
  Exit();
}
function Round2()
{
  
}


