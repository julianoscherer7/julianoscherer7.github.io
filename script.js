const gradeForm = document.getElementById('gradeForm');
const addGradeButton = document.getElementById('addGrade');
const gradeList = document.getElementById('gradeList');
const finalGrade = document.getElementById('finalGrade');

let grades = [];

// Adicionar nota
addGradeButton.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.trim();
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

// Atualizar lista de notas
function updateGradeList() {
    gradeList.innerHTML = '';
    grades.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.subject}</td>
            <td>${item.grade}</td>
            <td>${item.weight}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editGrade(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="deleteGrade(${index})">Excluir</button>
            </td>
        `;
        gradeList.appendChild(row);
    });
}

// Calcular média final
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

// Editar nota
function editGrade(index) {
    const item = grades[index];
    document.getElementById('subject').value = item.subject;
    document.getElementById('grade').value = item.grade;
    document.getElementById('weight').value = item.weight;

    deleteGrade(index); // Remove a nota antiga para ser atualizada
}

// Excluir nota
function deleteGrade(index) {
    grades.splice(index, 1);
    updateGradeList();
    calculateFinalGrade();
}
