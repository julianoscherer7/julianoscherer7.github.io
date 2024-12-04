// Seleção dos elementos
const gradeForm = document.getElementById('gradeForm');
const addGradeButton = document.getElementById('addGrade');
const gradeList = document.getElementById('gradeList');
const finalGrade = document.getElementById('finalGrade');

// Array para armazenar as notas
let grades = [];

// Função para adicionar nota
addGradeButton.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.trim();
    const grade = parseFloat(document.getElementById('grade').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (!subject || isNaN(grade) || isNaN(weight)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Adicionar nota ao array
    grades.push({ subject, grade, weight });

    // Atualizar lista e calcular média
    updateGradeList();
    calculateFinalGrade();

    // Limpar o formulário
    gradeForm.reset();
});

// Função para atualizar a lista de notas
function updateGradeList() {
    gradeList.innerHTML = ''; // Limpar a tabela
    grades.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.subject}</td>
            <td>${item.grade}</td>
            <td>${item.weight}</td>
        `;
        gradeList.appendChild(row);
    });
}

// Função para calcular a média final
function calculateFinalGrade() {
    let totalWeightedGrades = 0;
    let totalWeights = 0;

    grades.forEach(item => {
        totalWeightedGrades += item.grade * item.weight;
        totalWeights += item.weight;
    });

    const average = totalWeights === 0 ? 0 : (totalWeightedGrades / totalWeights).toFixed(2);
    finalGrade.textContent = `Média Final: ${average}`;
}
