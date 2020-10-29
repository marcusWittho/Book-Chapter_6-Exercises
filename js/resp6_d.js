function calc() {
  const TAXA_DE_DESCONTO = 0.20;
  var inDate = document.querySelector("#inDate");
  var inValor = document.querySelector("#inValor");  
  
  var dateVenc = inDate.value;
  var valor = Number(inValor.value);  
  
  if(dateVenc == "" || valor == 0 || isNaN(valor)) {
    alert("Preencha corretamente.");
    inDate.focus();
    return;
  }

  var limitDesc = new Date();
  
  var partes = dateVenc.split("-");
  limitDesc.setDate(partes[2]);
  limitDesc.setMonth(Number(partes[1] - 1 ));
  limitDesc.setFullYear(Number(partes[0]));

  var dia = limitDesc.getDate();

  limitDesc.setDate(dia + 90);

  var dia = limitDesc.getDate();
  var mes = limitDesc.getMonth() + 1;
  var ano = limitDesc.getFullYear();

  var comDesc = valor - (valor * TAXA_DE_DESCONTO);

  document.querySelector("#outDate").textContent = `Data limite para o pagto com desconto: ${dia}/${mes}/${ano}`;
  document.querySelector("#outValDesc").textContent = `Valor com desconto: R$ ${comDesc.toFixed(2)}`;

}

var btCalc = document.querySelector("#btCalc");
btCalc.addEventListener("click", calc);