const gradeForm = document.getElementById('gradeForm');
const addGradeButton = document.getElementById('addGrade');
const gradeList = document.getElementById('gradeList');
const finalGrade = document.getElementById('finalGrade');

let grades = [];

addGradeButton.addEventListener('click', () => {
    const subject = document.getElementById('subject').value;
    const grade = parseFloat(document.getElementById('grade').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (!subject || isNaN(grade) || isNaN(weight)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    grades.push({ subject, grade, weight });

    updateGradeList();
    calculateFinalGrade();

    gradeForm.reset();
});

function updateGradeList() {
    gradeList.innerHTML = '';
    grades.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.subject}: Nota ${item.grade} (Peso ${item.weight})`;
        gradeList.appendChild(listItem);
    });
}

function calculateFinalGrade() {
    let totalWeightedGrades = 0;
    let totalWeights = 0;

    grades.forEach(item => {
        totalWeightedGrades += item.grade * item.weight;
        totalWeights += item.weight;
    });

    const average = (totalWeights === 0) ? 0 : (totalWeightedGrades / totalWeights).toFixed(2);
    finalGrade.textContent = `Média Final: ${average}`;
}
