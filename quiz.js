let score = 0;
let currentQuestonIndex = 0;



let questions = [
{
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 2
},
{
    question: "Wann hat der zweite weltkrieg geendet?",
    answers: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1
},
{
    question: "Was wurde in Los Alamos entwickelt?",
    answers: ["Panzer", "Raketen", "Giftgas", "Die Atombombe"],
    correctAnswer: 3
},
{
    question: "Wann hat der erste Weltkrieg begonnen?",
    answers: ["1913", "1914", "1915", "1916"],
    correctAnswer: 1
},
{
    question: "Wo wurde im ersten Weltkrieg das erste Giftgas eingesetzt?",
    answers: ["Ypern", "Moskau", "Paris", "London"],
    correctAnswer: 0
},
{
    question: "Wer hat 1903 die Bolschewiki gegründet?",
    answers: ["Lenin", "Stalin", "Hitler", "Putin"],
    correctAnswer: 0
},
{
    question: "Was versuchten die Deutschen in Verdun zu erobern?",
    answers: ["Die Stadt", "Die Festung", "Den Fluss", "Den Hafen"],
    correctAnswer: 1
},{
    question: "Wo hat sich Hitler 1945 umgebracht?",
    answers: ["In seinem Bunker", "In seinem Haus", "Im Führerbunker", "In der Reichskanzlei"],
    correctAnswer: 2
},{
    question: "Wie hieß Bismark mit Vornamen?",
    answers: ["Otto", "Wilhelm", "Friedrich", "Karl"],
    correctAnswer: 0
},{
    question: "Wann hat Napoleon gelebt?",
    answers: ["1769-1821", "1770-1822", "1780-1830", "1790-1840"],
    correctAnswer: 0
},
];

function displayQuestion(){

    if(currentQuestonIndex >= questions.length){
    document.getElementById("quiz-container").hidden = true;
    document.getElementById("result").hidden = false;
    document.getElementById("score").textContent = score;
        return;
    
    }

    let question = questions[currentQuestonIndex];
    document.getElementById("question").textContent = question.question;

    let answersdiv = document.getElementById("answers");
    answersdiv.innerHTML = "";
    question.answers.forEach((answer,index)=> {
        let answerbutton = document.createElement("button");
        answerbutton.classList.add("btn", "btn-dark", "me-2")
        answerbutton.textContent = answer;
        answerbutton.onclick = () => checkAnswer(index);
        answersdiv.appendChild(answerbutton);
    });
}

displayQuestion();

function checkAnswer(useranswer){
    let correctAnswer = questions[currentQuestonIndex].correctAnswer;
    if(useranswer === correctAnswer){
        score++;
    }
   nextQuestion();
}

function nextQuestion(){
    currentQuestonIndex++;
    displayQuestion();
}