function senha() {
  let inSenha = document.querySelector("#inSenha");
  let senha = inSenha.value;
  let erros = 0;

  let conditions = [
    senha.length >= 8 && senha.length <= 15,
    senha.match(/[0-9]/g),
    senha.match(/[a-z]/g),
    senha.match(/[A-Z]/g) && senha.match(/[A-Z]/g).length > 1,
    senha.match(/\W/g)
  ];

  let identities = [
    "char",
    "number",
    "lowcase",
    "uppercase",
    "symbol"
  ];

  for (id in identities) {
    if(conditions[id]) {
      document.querySelector(`#${identities[id]}`).classList.add("green");
    }else {
      document.querySelector(`#${identities[id]}`).classList.remove("green");
      erros++;
    }
  }

  if (erros > 0) {
    alert("Atente-se aos requisitos.")
  }
  
  inSenha.value = "";
  inSenha.focus();
}

var btVerificar = document.querySelector("#btVerificar");
btVerificar.addEventListener("click", senha);