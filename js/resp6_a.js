function cript() {
  var inMsg = document.querySelector("#inMsg");
  var msg = inMsg.value;

  if(msg == "") {
    alert("Informe a mensagem.");
    inMsg.focus();
    return;
  }

  var resp = "";
  var tam = msg.length; 
  
  for(var i = 1; i < tam; i = i + 2) {
    resp += msg.charAt(i);
  }

  for(var i = 0; i < tam; i = i + 2) {
    resp += msg.charAt(i);
  }
 
  document.querySelector("#outRes").textContent = resp;

  inMsg.value = "";
  inMsg.focus();
}

var btCrip = document.querySelector("#btCrip");
btCrip.addEventListener("click", cript);

function decript() {
  var inMsg = document.querySelector("#inMsg");
  var msg = inMsg.value;

  if(msg == "") {
    alert("Informe a mensagem.");
    inMsg.focus();
    return;
  }

  var tam = msg.length;
  var metade = Math.floor(tam / 2);
  var resp = "";

  if(tam % 2 == 0) {
    for(var i = metade; i < tam; i++) {
      resp += msg.charAt(i);
      resp += msg.charAt(i - metade);
    }
  }else {
    for(var i = metade; i < tam -1; i++) {
      resp += msg.charAt(i);
      resp += msg.charAt(i - metade);
    }
    resp += msg.charAt(i);
  }

  document.querySelector("#outRes").textContent = resp;

  inMsg.value = "";
  inMsg.focus();
}

var btDecrip = document.querySelector("#btDecrip");
btDecrip.addEventListener("click", decript);


