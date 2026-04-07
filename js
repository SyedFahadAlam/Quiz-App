const questions = [
    {
        question: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database", "OS"],
        answer: 1
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: 2
    },
    {
        question: "Which is used for logic?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;

    options.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.classList.remove("correct", "wrong");
    });
}

options.forEach((button, index) => {
    button.addEventListener("click", () => {
        let correct = questions[currentQuestion].answer;

        if (index === correct) {
            button.classList.add("correct");
            score++;
        } else {
            button.classList.add("wrong");
            options[correct].classList.add("correct");
        }
    });
});

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = `Quiz Over! Score: ${score}`;
        document.querySelector(".options").style.display = "none";
        nextBtn.style.display = "none";
    }
});

loadQuestion();
