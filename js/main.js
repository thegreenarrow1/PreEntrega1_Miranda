let nombreIngreso = prompt("Ingrese su nombre y apellido para continuar");

function calculatePayments() {
  let amount = parseFloat(document.getElementById("amount").value);
  let payments = parseInt(document.getElementById("payments").value);
  let interest = 0.03; // Tasa de interés

  if (isNaN(amount) || amount <= 0) {
    alert("El monto ingresado no es válido");
    document.getElementById("result").innerHTML =" ";
  } else if (![3, 6, 12].includes(payments)) {
    alert("El número de cuotas debe ser 3, 6 o 12");
    document.getElementById("result").innerHTML =" ";
  } else {
    let monthlyPayment = (amount * interest / payments) + (amount / payments);
    document.getElementById("result").innerHTML = "Monto a pagar: $" + amount.toFixed(2) + "<br>" + "Número de cuotas: " + payments + "<br>" + "Pago mensual: $" + monthlyPayment.toFixed(2);
  }
}