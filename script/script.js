document.addEventListener('DOMContentLoaded', () => {
    const theoryInputs = document.querySelectorAll('.theory');
    const practicalInputs = document.querySelectorAll('.practical');
    const totalInputs = document.querySelectorAll('.total');
    function calculateTotal() {
        let grandTotal = 0;
        theoryInputs.forEach((theoryInput, index) => {
            const theoryMarks = parseInt(theoryInput.value) || 0;
            const practicalMarks = parseInt(practicalInputs[index].value) || 0;
            const totalMarks = theoryMarks + practicalMarks;
            totalInputs[index].value = totalMarks;
            grandTotal += totalMarks;
            // Display Pass/Fail for each subject
            const gradeCell = totalInputs[index].closest('tr').querySelector('td:last-child');
            gradeCell.textContent = totalMarks >= 50 ? 'PASS' : 'FAIL';
        });
        // Update Grade Total
        const gradeTotalCell = document.getElementById('grand-total');
        gradeTotalCell.textContent = grandTotal;
        // Update Result and Percentage
        const resultCell = document.getElementById('result-total');
        const percentageCell = document.getElementById('percentage');
        const finalGradeCell = document.getElementById('final-grade');
        const subjectsCount = theoryInputs.length;
        resultCell.textContent = grandTotal;
        const percentage = (grandTotal / (subjectsCount * 100)) * 100;
        percentageCell.textContent = percentage.toFixed(2) + '%';
        // Display final grade
        finalGradeCell.textContent = percentage >= 50 ? 'PASS' : 'FAIL';
    }
    theoryInputs.forEach(input => input.addEventListener('input', calculateTotal));
    practicalInputs.forEach(input => input.addEventListener('input', calculateTotal));
});
