function calcularPagoagua() {
    const consumo = parseFloat(document.getElementById('consumo').value);
    const precio = parseFloat(document.getElementById('precio').value);
    const total = consumo * precio;
    document.getElementById('resultado').innerText = 
        `El consumo de agua es: $${total.toFixed(2)}`;
}

function calcularPagoElectricidad() {
    const kilowatts = parseFloat(document.getElementById("kilowatts").value);
    const precioKW = parseFloat(document.getElementById("precioKW").value);
    const pago = kilowatts * precioKW;
    document.getElementById("resultado").innerText = `El pago total es de $${pago.toFixed(2)} MXN`;
}


function calcularPrecioFinal() {
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = precio * 0.20;
    const precioConDescuento = precio - descuento;

    const iva = precioConDescuento * 0.16;
    const precioFinal = precioConDescuento + iva;

    document.getElementById("resultado").innerHTML =
        `Precio con descuento: $${precioConDescuento.toFixed(2)}<br>` +
        `IVA (16%): $${iva.toFixed(2)}<br>` +
        `<strong>Precio final: $${precioFinal.toFixed(2)}</strong>`;
}

function calcularAhorro() {
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const ahorroSemanal = sueldo * 0.15;
    const ahorroAnual = ahorroSemanal * 4 * 12;

    document.getElementById("resultado").innerText = 
        `El ahorro anual es de $${ahorroAnual.toFixed(2)} MXN`;
}

function calcularCheque() {
    const dias = parseInt(document.getElementById('dias').value);
    const hotel = parseFloat(document.getElementById('hotel').value);
    const comida = parseFloat(document.getElementById('comida').value);
    const total = dias * (hotel + comida);
    document.getElementById('resultado').innerText = `Monto del cheque: $${total.toFixed(2)}`;
}


function calcularPotencia() {
    const R = parseFloat(document.getElementById("resistencia").value);
    const I = parseFloat(document.getElementById("intensidad").value);

    const V = R * I;
    const P = V * I;

    document.getElementById("resultado").innerHTML =
        `Voltaje (V): ${V.toFixed(2)} volts<br>` +
        `Potencia (P): ${P.toFixed(2)} watts`;
}

function calcularArea() {
    const lado = parseFloat(document.getElementById("lado").value);
    const area = lado * lado;

    document.getElementById("resultado").innerText = 
        `El área del cuadrado es: ${area.toFixed(2)} unidades cuadradas`;
}

function calcularPromedio() {
    const e1 = parseFloat(document.getElementById("exam1").value);
    const e2 = parseFloat(document.getElementById("exam2").value);
    const e3 = parseFloat(document.getElementById("exam3").value);

    const promedio = e1 * 0.25 + e2 * 0.25 + e3 * 0.5;

    document.getElementById("resultado").innerText = 
        `El promedio final es: ${promedio.toFixed(2)}`;
}

function calcularTiempoVivido() {
    const edad = parseFloat(document.getElementById("edad").value);
    const meses = edad * 12;
    const semanas = edad * 52;
    const dias = edad * 365;
    const horas = dias * 24;

    document.getElementById("resultado").innerHTML = 
        `Has vivido aproximadamente:<br>` + 
        `${meses} meses<br>` +
        `${semanas} semanas<br>` +
        `${dias} días<br>` +
        `${horas} horas`;
}

function calcularEstancia() {
    const noches = parseFloat(document.getElementById("noches").value);
    const costoPorNoche = parseFloat(document.getElementById("costoNoche").value);

    const total = noches * costoPorNoche;

    document.getElementById("resultado").innerText =
        `Total a pagar por la estancia: $${total.toFixed(2)} MXN`;
}
