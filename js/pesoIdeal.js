document.getElementById('form_pesoIdeal').addEventListener('submit', function (event) {
    event.preventDefault()

    const sexo = document.getElementById('sexo1').value;
    const edad = Number(document.getElementById('edad1').value);
    const peso = Number(document.getElementById('peso1').value);
    const esta = Number(document.getElementById('estatura1').value);
    const genero = ['Mujer', 'Hombre'];
    const imcfor = peso / (esta / 100) * 2;

    let pesoIdeal, valor, imc;

    if (!genero.includes(sexo)) {
        document.getElementById('result6').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> El sexo debe ser 'Hombre' o 'Mujer'.</div>`;
        return;
    };

    if (!edad) {
        document.getElementById('result6').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> La edad debe ser un numero mayor o igual a 1.</div>`;
        return;
    };

    if (!peso) {
        document.getElementById('result6').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Ambos valores deben ser numéricos.</div>`;
        return;
    };

    if (!esta) {
        document.getElementById('result6').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Ambos valores deben ser numéricos.</div>`;
        return;
    };

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
    };

    if (sexo === 'Hombre') {
        pesoIdeal = esta - 100 - ((esta - 150) / 4);
    } else if (sexo === 'Mujer') {
        pesoIdeal = esta - 100 - ((esta - 150) / 2.5);
    };

    if (pesoIdeal < peso) {
        const perder = pesoIdeal - peso;
        valor = `<strong>Deberia peder</strong> : <span class="badge text-bg-danger">${perder} (Kg)</span>`;
    } else if (pesoIdeal > peso) {
        const ganar = pesoIdeal - peso;
        valor = `<strong>Deberia ganar</strong> : <span class="badge text-bg-warning">${ganar} (Kg)</span>`;
    } else if (pesoIdeal == peso) {
        valor = `<span class="badge text-bg-success">Su peso es ideal</span>`;
    };

    document.getElementById('result6').innerHTML = `
        <div class='alert alert-success' role='alert'>
            <strong>Resultado final :</strong><br><br>
            <strong>Sexo</strong> : ${sexo}<br>
            <strong>Edad</strong> : ${edad}<br>
            <strong>Peso actual</strong> : ${peso} (Kg)<br>
            <strong>Estatura</strong> : ${esta} (cm)<br>
            <strong>Peso ideal</strong> : ${pesoIdeal} (Kg)<br>
            <strong>Imc</strong> : ${Math.floor(imcfor)} ${imc}<br>
            ${valor}
        </div>`;
});