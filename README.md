<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Planilha de Despesas</title>
    <style>
        footer {
            text-align: center;
            padding: 1rem;
            background-color: #f2f2f2; /* Opcional */
        }
    </style>
</head>
<body>
    <header>
        <h1>Planilha de Despesas</h1>
    </header>
    <main>
        <table id="despesas">
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Valor (R$)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Consumo de Água</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Energia Elétrica</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Vale Transporte</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Combustível</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Fornecedores</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Impostos</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Insumos Diversos</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Internet</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Dados Móveis</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Material de Limpeza</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Serviços Prestados Terceiros</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Plano de Saúde</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Segurança Patrimonial</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Softwares</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Empréstimos Bancários</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Marketing</td>
                    <td contenteditable="true">0.00</td>
                </tr>
                <tr>
                    <td>Folha de Pagamento</td>
                    <td contenteditable="true">0.00</td>
                </tr>
            </tbody>
            <tfoot>
                    <td>Total</td>
                    <td id="total">0.00</td>
                </tr>
            </tfoot>
        </table>
        <button id="calcular">Calcular Total</button>
    </main>
    <footer>
        <p>&copy; 2025 Criado por Shinzo Suzuki. Todos os direitos reservados.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

