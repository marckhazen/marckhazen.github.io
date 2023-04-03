const quizForm = document.querySelector("#quiz-form");
const resultDiv = document.querySelector("#result");
const answers = ["b", "c", "c", "a", "d"];
const questions = ["The programming language that has the ability to create new data types is called___.", "Which of the following is the original creator of the C++ language?", "C++ is a ___ type of language.", "Which of the following refers to characteristics of an array?", "Which of the following statement is correct about Virtual Inheritance?"];

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
	quizForm.style.display="none";
	resultDiv.style.display="block";
	showResult();
});

function showResult() {
	let score = 0;
	const userAnswers = [];
	const inputs = quizForm.querySelectorAll("input");
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			userAnswers.push(inputs[i].value);
		}
	}
	
	for (let i = 0; i < answers.length; i++) {
		if (userAnswers[i] === answers[i]) {
			score++;
		} 
	}

	let table = "<table><tr><th>Question</th><th>Correct Answer</th><th>Review</th></tr>";
    for(let i=0; i<5; i++){
        table += "<tr><td>" + questions[i] + "</td><td>" + answers[i] + "</td>";
        if(userAnswers[i] == answers[i]){
            table+="<td>Correct</td></tr>";
        }
        else{
            table+="<td>Incorrect</td></tr>";
        }
    }
    table += "</table>";
    resultDiv.innerHTML = "<h1>Results</h1>" +"<br><h2 style=\"font-size:30px; text-align:center; border: solid black;\">Score: "+score+"/5</h2><br>"+table;
}