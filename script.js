// Sample question pools for demonstration purposes
const questionPools = {
    'Aptitude': [
        "What is the sum of the first 10 prime numbers?",
        "If 5x + 3 = 23, what is the value of x?",
        "A train travels 60 miles in 1.5 hours. What is its average speed?",

    ],
    'Theory': {
        'Mathematics': [
            "Explain the concept of limits in calculus.",
            "What is the Pythagorean theorem?",
            "Describe the properties of a parallelogram.",
            
        ],
        'Computer Science': [
            "What is the difference between a compiler and an interpreter?",
            "Explain the concept of object-oriented programming.",
            "Describe the working of a stack data structure.",
        ],
    },
    'Programming': {
        'Mathematics': [
            "Write a Python function to calculate the factorial of a number.",
            "Create a program to solve quadratic equations.",
            "Write a script to check if a number is prime.",
        ],
        'Computer Science': [
            "Write a Python program to implement a binary search algorithm.",
            "Create a program to reverse a linked list.",
            "Write code to find the maximum element in an array.",
        ],
    }
};

function generateQuestions() {
    const questionType = document.getElementById('questionType').value;
    const subjectName = document.getElementById('subjectName').value;
    const subjectCode = document.getElementById('subjectCode').value;
    const numQuestions = parseInt(document.getElementById('numQuestions').value);

    let questions = [];
    
    if (questionType === 'Aptitude') {
        questions = questionPools['Aptitude'].slice(0, numQuestions);
    } else {
        questions = questionPools[questionType][subjectName].slice(0, numQuestions);
    }

    let subjectDetails = subjectCode ? `${subjectName} (${subjectCode})` : subjectName;
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Generated ${questionType} Questions for ${subjectDetails}:</h3>`;
    questions.forEach((question, index) => {
        outputDiv.innerHTML += `<p>${index + 1}. ${question}</p>`;
    });
}
