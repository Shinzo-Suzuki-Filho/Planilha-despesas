document.getElementById('calcular').addEventListener('click', () => {
    const rows = document.querySelectorAll('#despesas tbody tr');
    let total = 0;

    rows.forEach(row => {
        const valueCell = row.cells[1];
        const value = parseFloat(valueCell.textContent.replace(',', '.')) || 0; // Aceita vírgula e ponto
        total += value;
    });

    document.getElementById('total').textContent = total.toFixed(2).replace('.', ',');
});

document.getElementById('limpar').addEventListener('click', () => {
    const valueCells = document.querySelectorAll('#despesas tbody td[contenteditable="true"]');
    
    valueCells.forEach(cell => {
        cell.textContent = '0.00';
    });

    document.getElementById('total').textContent = '0,00';
});
