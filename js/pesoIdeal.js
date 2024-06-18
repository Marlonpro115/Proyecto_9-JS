document.getElementById('form_pesoIdeal').addEventListener('submit', function (event) {
    event.preventDefault();

    const sexo = document.getElementById('sexo1').value;
    const edad = Number(document.getElementById('edad1').value);
    const peso = Number(document.getElementById('peso1').value);
    const esta = Number(document.getElementById('estatura1').value); // estatura en cm
    const genero = ['Mujer', 'Hombre'];
    
    // Convertir estatura de cm a metros para calcular el IMC
    const estaturaMetros = esta / 100;
    
    // Calcular IMC
    const imcfor = peso / (estaturaMetros * estaturaMetros);

    let pesoIdeal, valor, imc;

    if (!genero.includes(sexo)) {
        document.getElementById('result6').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> El sexo debe ser 'Hombre' o 'Mujer'.</div>`;
        return;
    }

    if (!edad) {
        document.getElementById('result6').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> La edad debe ser un número mayor o igual a 1.</div>`;
        return;
    }

    if (!peso || !esta) {
        document.getElementById('result6').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Ambos valores deben ser numéricos.</div>`;
        return;
    }

    if (imcfor < 18.5) {
        imc = `<span class="badge text-bg-warning">BAJO PESO</span>`;
    } else if (imcfor >= 18.5 && imcfor <= 24.9) {
        imc = `<span class="badge text-bg-success">NORMAL</span>`;
    } else if (imcfor >= 25 && imcfor <= 29.9) {
        imc = `<span class="badge text-bg-warning">SOBREPESO</span>`;
    } else if (imcfor >= 30 && imcfor <= 34.9) {
        imc = `<span class="badge text-bg-danger">OBESIDAD I</span>`;
    } else if (imcfor >= 35 && imcfor <= 39.9) {
        imc = `<span class="badge text-bg-danger">OBESIDAD II</span>`;
    } else if (imcfor >= 40 && imcfor <= 49.9) {
        imc = `<span class="badge text-bg-danger">OBESIDAD III</span>`;
    } else if (imcfor > 50) {
        imc = `<span class="badge text-bg-danger">OBESIDAD IV</span>`;
    }

    // Calcular peso ideal
    if (sexo === 'Hombre') {
        pesoIdeal = estaturaMetros * estaturaMetros * 22; // Fórmula aproximada para hombres
    } else if (sexo === 'Mujer') {
        pesoIdeal = estaturaMetros * estaturaMetros * 21; // Fórmula aproximada para mujeres
    }

    if (pesoIdeal < peso) {
        const perder = peso - pesoIdeal;
        valor = `<strong>Debería perder:</strong> <span class="badge text-bg-danger">${perder.toFixed(2)} (Kg)</span>`;
    } else if (pesoIdeal > peso) {
        const ganar = pesoIdeal - peso;
        valor = `<strong>Debería ganar:</strong> <span class="badge text-bg-warning">${ganar.toFixed(2)} (Kg)</span>`;
    } else {
        valor = `<span class="badge text-bg-success">Su peso es ideal</span>`;
    }

    document.getElementById('result6').innerHTML = `
        <div class='alert alert-success' role='alert'>
            <strong>Resultado final:</strong><br><br>
            <strong>Sexo:</strong> ${sexo}<br>
            <strong>Edad:</strong> ${edad}<br>
            <strong>Peso actual:</strong> ${peso} (Kg)<br>
            <strong>Estatura:</strong> ${esta} (cm)<br>
            <strong>Peso ideal:</strong> ${pesoIdeal.toFixed(2)} (Kg)<br>
            <strong>IMC:</strong> ${imcfor.toFixed(2)} ${imc}<br>
            ${valor}
        </div>`;
});
