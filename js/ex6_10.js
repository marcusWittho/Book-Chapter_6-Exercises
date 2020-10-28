const TAXA_MULTA = 2 / 100; // Multa por atraso
const TAXA_JUROS = 0.33 / 100; // Juros por dia de atraso

function calcularMultaJuros() {  
  var inDataVenc = document.querySelector("#inDataVenc");
  var inValor = document.querySelector("#inValor");
  var outMulta = document.querySelector("#outMulta");
  var outJuros = document.querySelector("#outJuros");
  var outTotal = document.querySelector("#outTotal");

  var dataVenc = inDataVenc.value;
  var valor = Number(inValor.value);

  if(dataVenc == "" || valor == 0 || isNaN(valor)) {
    alert("Informe corretamente os dados da conta...");
    inDataVenc.focus();
    return;
  }

  var hoje = new Date();
  var vencto = new Date();

  // A data vem no formato aaaa-mm-dd
  var partes = dataVenc.split("-");
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));
  
  var atraso = hoje - vencto;

  var multa = 0;
  var juros = 0

  if(atraso > 0) {
    // Converte os milisegundos da diferença em dias
    // 1 dia = 24hrs * 60min * 60seg * 1000mseg: 86400000
    // round(): necessário para períodos envolvendo horário de verão
    var dias = Math.round(atraso / 86400000);
    
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