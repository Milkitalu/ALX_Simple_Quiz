let btn = document.getElementById("submit-answer");
btn.addEventListener("click", checkAnswer);


function checkAnswer() {
    let correctAnswer = "4";
   
    let userAnswer= Array.document.querySelector('input[name="quiz"]').value;
    
    for (let i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i].checked && userAnswer[i] == correctAnswer) { 
            document.getElementById("feedback").innerHTML = "Correct! Well done."; }else {
                document.getElementById("feedback").innerHTML = "That's incorrect. Try again!";
            }

}






