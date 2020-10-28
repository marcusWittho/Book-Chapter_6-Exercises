const TAXA_MULTA = 2 / 100; // Multa por atraso
const TAXA_JUROS = 0.33 / 100; // Juros por dia de atraso

function calcularMultaJuros() {
  // Referência aos elementos da página
  var inDataVenc = document.querySelector("#inDataVenc");
  var inValor = document.querySelector("#inValor");
  var outMulta = document.querySelector("#outMulta");
  var outJuros = document.querySelector("#outJuros");
  var outTotal = document.querySelector("#outTotal");

  // Obtém os conteúdos dos campos de entrada
  var dataVenc = inDataVenc.value;
  var valor = Number(inValor.value);

  // Valida o preenchimento dos campos
  if(dataVenc == "" || valor == 0 || isNaN(valor)) {
    alert("Informe corretamente os dados da conta...");
    inDataVenc.focus();
    return;
  }

  // Cria duas variáveis (instancia dis objetos) tipo data
  var hoje = new Date();
  var vencto = new Date();

  // A data vem no formato aaaa-mm-dd
  var partes = dataVenc.split("-");
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));
  
  // Calcula a diferença de dias entre as datas (em milisegundos)
  var atraso = hoje - vencto;

  // Inicializa multa e juros com 0
  var multa = 0;
  var juros = 0

  // Se conta estiver em atraso...
  if(atraso > 0) {
    // Converte os milisegundos da diferença em dias
    // 1 dia = 24hrs * 60min * 60seg * 1000mseg: 86400000
    // round(): necessário para períodos envolvendo horário de verão
    var dias = Math.round(atraso / 86400000);
    
    // Calcula multa e juros
    multa = valor * TAXA_MULTA;
    juros = (valor * TAXA_JUROS) * dias;
  }

  var total = valor + multa + juros;

  outMulta.value = multa.toFixed(2);
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}

var btCalcular = document.querySelector("#btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limpaCampos() {
  document.querySelector("#inDataVenc").value = "";
  document.querySelector("#inValor").value = "";
  document.querySelector("#outMulta").value = "";
  document.querySelector("#outJuros").value = "";
  document.querySelector("#outTotal").value = "";
}

var btNovaConta = document.querySelector("#btNovaConta");
btNovaConta.addEventListener("click", limpaCampos);