function analisarCartao() {
    var rawInput = document.getElementById("cartaoInput").value;
    
    // Remove espaços e pontos exigido pelo comando
    var num = rawInput.replace(/\s+/g, '').replace(/\./g, '');

    // Verifica tamanho entre 13 e 16
    if (num.length < 13 || num.length > 16) {
        alert("O cartão deve ter entre 13 e 16 dígitos!");
        return;
    }

    // --- ALGORITMO DE LUHN ---
    var soma = 0;
    var alternar = false;

    // Varre de trás para frente
    for (var i = num.length - 1; i >= 0; i--) {
        var n = parseInt(num.charAt(i));

        if (alternar) {
            n = n * 2;
            if (n > 9) {
                n = n - 9;
            }
        }
        soma = soma + n;
        alternar = !alternar;
    }

    var valido = (soma % 10 === 0);
    // -------------------------

    // Descobrir Bandeira básica
    var bandeira = "Outra";
    if (num.startsWith("4")) bandeira = "Visa";
    else if (num.startsWith("5")) bandeira = "Mastercard";
    else if (num.startsWith("3")) bandeira = "American Express";

    // Descobrir Setor (1º dígito)
    var prim = num.charAt(0);
    var setor = "Outro";
    if (prim == "1" || prim == "2") setor = "Linhas Aéreas";
    else if (prim == "3") setor = "Viagens / Entretenimento";
    else if (prim == "4" || prim == "5") setor = "Bancos e Financeiras";

    // Extrai o IIN (8 dígitos iniciais conforme a ISO)
    var iin = num.substring(0, 8);
    var codBanco = num.substring(1, 5); // Dígitos 2 a 5 para o Banco

    // Mostra o painel e limpa as classes antigas
    document.getElementById("painel").style.display = "block";
    var statusSpan = document.getElementById("statusTxt");

    if (valido) {
        statusSpan.textContent = "VÁLIDO";
        statusSpan.className = "valido";
    } else {
        statusSpan.textContent = "INVÁLIDO";
        statusSpan.className = "invalido";
    }

    document.getElementById("bandeiraTxt").textContent = bandeira;
    document.getElementById("setorTxt").textContent = setor;
    document.getElementById("bancoTxt").textContent = "Lote " + iin + " (Banco Cód: " + codBanco + ")";
}