const playBtn = document.getElementById("speedRunBtn");
const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");


const question = document.getElementById("question");
const answer = document.getElementById("ans");
let execution = 0;
let started = false;

const getRandomInt = (max)=>{
    return Math.floor(Math.random() * max);
}


const QuestionGen = ()=>{
    if(started == false)
    let x = getRandomInt(20);
    let num1 = getRandomInt(100);
    let num2 = getRandomInt(100);
    if(x <= 5) return {q : `${num1} + ${num2}`, sum : num1 + num2};
    if(x >= 10) return {q : `${num1} - ${num2}`, sum : num1 - num2};
    if(x >= 15 ) return {q : `${num1} x ${num2}`, sum : num1 * num2};
    if(x <= 20) return {q : `${num1} ÷ ${num2}`, sum : num1 / num2};
  
}



const game = (questionDiv)=>{
    let q = QuestionGen();
    questionDiv.innerHTML = q.q;
    setTimeout(() => {
        if(execution == 20) started = false;
        if(answer.value == q.sum) execution++;
        if(answer.value !== q.sum)  execution++;
        game(question)
    }, 4000);
}




playBtn.addEventListener("click", ()=>{
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    started = true
    game(question)
})