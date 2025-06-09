document.getElementById('calcular').addEventListener('click', () => {
    const rows = document.querySelectorAll('#despesas tbody tr');
    let total = 0;

    rows.forEach(row => {
        const valueCell = row.cells[1];
        const value = parseFloat(valueCell.textContent) || 0;
        total += value;
    });

    document.getElementById('total').textContent = total.toFixed(2);
});