function bto() {
  let peso = document.getElementById("weight").value;
  let altura = document.getElementById("Height").value;

  if (peso === "" || altura === "") {
    alert("Prencha as caixas");
    return;
  }

  imc = peso / (altura * altura);

  let res = document.querySelector(".resultado");
  let clas = document.querySelector(".final");

  res.textContent = `Seu IMC é de ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    clas.textContent = `Você está bem abaixo do peso`;
    clas.style.color = "#5DADE2";
  } else if (18.5 <= imc && imc < 24.9) {
    clas.textContent = `Você está com o peso normal`;
    clas.style.color = " #58D68D";
  } else if (imc >= 25 && imc < 30) {
    clas.textContent = `Você está sobre peso`;
    clas.style.color = "	#F4D03F";
  } else if (imc >= 30 && imc < 35) {
    clas.textContent = `Você está Obeso`;
    clas.style.color = " #EB984E";
  } else if (imc > 35 ) {
    clas.textContent = `Você está com obesidade extrema`;
    clas.style.color = "	#C0392B";
  }
}
