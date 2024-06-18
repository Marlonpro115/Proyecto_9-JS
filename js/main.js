function imc() {
    const esta = Number(document.getElementById('estatura').value);
    const peso = Number(document.getElementById('peso').value);

    if (!esta || !peso) {
        document.getElementById('result1').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Ambos valores deben ser numéricos.</div>`;
        return;
    }

    let valor, color;

    const imc = peso / (esta * esta);
    const mensaje1 = randomMessage1('alto_peso');
    const mensaje2 = randomMessage1('alto_peso1');

    if (imc < 18.5) {
        const mensaje = randomMessage1('bajo_peso');
        valor = `Su IMC es BAJO PESO <img src="./img/bajo_peso.png" alt=""><br>${mensaje}`;
        color = 'alert-warning';
    } else if (imc >= 18.5 && imc <= 24.9) {
        const mensaje = randomMessage();
        valor = `Su IMC es NORMAL <img src="./img/peso.png" alt=""><br>${mensaje}`;
        color = 'alert-success';
    } else if (imc >= 25 && imc <= 29.9) {
        valor = `Su IMC ES SOBREPESO <img src="./img/obesidad.png" alt=""><br>${mensaje1}`;
        color = 'alert-danger';
    } else if (imc >= 30 && imc <= 34.9) {
        valor = `Su IMC es OBESIDAD I <img src="./img/obesidad.png" alt=""><br>${mensaje1}`;
        color = 'alert-danger';
    } else if (imc >= 35 && imc <= 39.9) {
        valor = `Su IMC es OBESIDAD II <img src="./img/obesidad.png" alt=""><br>${mensaje1}`;
        color = 'alert-danger';
    } else if (imc >= 40 && imc <= 49.9) {
        valor = `Su IMC es OBESIDAD III <img src="./img/obesidad.png" alt=""><br>${mensaje2}`;
        color = 'alert-danger';
    } else if (imc > 50) {
        valor = `Su IMC es OBESIDAD IV <img src="./img/obesidad.png" alt=""><br>${mensaje2}`;
        color = 'alert-danger';
    }

    document.getElementById('result1').innerHTML = `<div class='alert ${color}' role='alert'><strong>IMC : </strong> ${valor}</div>`;
};


function presion_alt() {
    const precionNum = Number(document.getElementById('presion').value);

    if (!precionNum) {
        document.getElementById('result2').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese un valor valido.</div>`;
        return;
    };

    let presion_arterial, color;
    const mensaje1 = randomMessage1('presion_alta');

    if (precionNum < 90) {
        const mensaje = randomMessage1('baja_presion');
        presion_arterial = `Su presión es BAJA <br>${mensaje}`;
        color = 'alert-warning';
    } else if (precionNum < 120) {
        const mensaje = randomMessage();
        presion_arterial = `Su presión es NORMAL <br>${mensaje}`;
        color = 'alert-success';
    } else if (precionNum >= 120 && precionNum <= 139) {
        const mensaje = randomMessage1('presion_hiper');
        presion_arterial = `Su presión es PREHIPERTENSIÓN <br>${mensaje}`;
        color = 'alert-danger';
    } else if (precionNum >= 140 && precionNum <= 159) {
        presion_arterial = `Su presión es ALTA: HIPERTENSIÓN FASE I <br>${mensaje1}`;
        color = 'alert-danger';
    } else if (precionNum >= 160) {
        presion_arterial = `Su presión es ALTA: HIPERTENSIÓN FASE II <br>${mensaje1}`;
        color = 'alert-danger';
    }

    document.getElementById('result2').innerHTML = `<div class='alert ${color}' role='alert'><strong>Presión arterial : </strong> ${presion_arterial} </div>`;
};

function edad_mp() {
    const edad = Number(document.getElementById('edad').value);

    if (!edad) {
        document.getElementById('result3').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese un valor validos.</div>`;
        return;
    }

    let result;

    if (edad > 100) {
        document.getElementById('result3').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Acaso eres un zombi?</strong></div>`;
    } else {
        if (edad <= 12) {
            result = '¡Eres un niño!';
        } else if (edad > 12 && edad <= 40) {
            result = '¡Eres un joven!';
        } else if (edad > 40 && edad <= 60) {
            result = '¡Eres un adulto!';
        } else if (edad > 60 && edad <= 100) {
            result = '¡Eres un adulto mayor!';
        }

        document.getElementById('result3').innerHTML = `<div class='alert alert-success' role='alert'><strong>Resultado final : </strong> ${result} </div>`;
    }
};

function zapatos_mp() {
    const zapaNum = Number(document.getElementById('zapatos').value);
    const precioNum = Number(document.getElementById('precio').value);

    if (!zapaNum || !precioNum) {
        document.getElementById('result4').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese valores en ambos campos.</div>`;
        return;
    };

    const precioTotal = zapaNum * precioNum;
    let descuento = 0;

    if (zapaNum >= 10 && zapaNum <= 20) {
        descuento = 10;
    } else if (zapaNum > 20 && zapaNum < 30) {
        descuento = 20;
    } else if (zapaNum >= 30) {
        descuento = 40;
    }

    const descuentoFinal = precioTotal * (descuento / 100);
    const totalFinal = Math.floor(precioTotal - descuentoFinal);

    document.getElementById('result4').innerHTML = `
        <div class='alert alert-success' role='alert'>
            <strong>Resultado final :</strong><br>
            Cantidad de zapatos : ${zapaNum}<br>
            Precio inicial : ${precioTotal}<br>
            Descuento : ${descuento} %<br>
            Total a pagar: ${totalFinal}
        </div>`;
};

function tabla_mp() {
    const sexo = document.getElementById('sexo').value;
    const edadNum = Number(document.getElementById('edad_mp').value);
    const genero = ['Mujer', 'Hombre'];

    if (edadNum <= 0) {
        document.getElementById('result5').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> La edad debe ser un número positivo o mayor a cero.</div>`;
        return;
    }

    if (!edadNum) {
        document.getElementById('result5').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor ingrese valor numerico.</div>`;
        return;
    }

    if (!genero.includes(sexo)) {
        document.getElementById('result5').innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error:</strong> El sexo debe ser 'Hombre' o 'Mujer'.</div>`;
        return;
    }

    let peso, altura;

    if (sexo === 'Hombre') {
        if (edadNum <= 14) {
            peso = 45;
            altura = 157;
        } else if (edadNum <= 18) {
            peso = 66;
            altura = 176;
        } else if (edadNum <= 24) {
            peso = 72;
            altura = 177;
        } else if (edadNum <= 50) {
            peso = 79;
            altura = 176;
        } else {
            peso = 77;
            altura = 173;
        }
    } else if (sexo === 'Mujer') {
        if (edadNum <= 14) {
            peso = 46;
            altura = 157;
        } else if (edadNum <= 18) {
            peso = 55;
            altura = 163;
        } else if (edadNum <= 24) {
            peso = 58;
            altura = 164;
        } else if (edadNum <= 50) {
            peso = 63;
            altura = 163;
        } else {
            peso = 65;
            altura = 160;
        }
    }

    document.getElementById('result5').innerHTML = `
        <div class='alert alert-success' role='alert'>
            <strong>Resultado final :</strong><br>
            Sexo : ${sexo}<br>
            Edad : ${edadNum}<br>
            Peso ideal : ${peso}<br>
            Altura ideal : ${altura}
        </div>`;
};

//Mensajes aletorios
function randomMessage() {
    const mensajes = [
        "¡Buen trabajo!",
        "Sigue así.",
        "Eres increíble.",
        "¡Sigue adelante!",
        "¡Lo estás haciendo genial!",
        "¡Bien hecho!",
        "¡Mantén el buen trabajo!"
    ];

    return mensajes[Math.floor(Math.random() * mensajes.length)];
};

function randomMessage1(texto = '') {
    let mensaje;

    if (texto == 'bajo_peso') {
        mensaje = [
            "¡Hora de aumentar esos kilos! Tu cuerpo te lo agradecerá.",
            "Es momento de darle más energía a tu vida con un poco más de peso.",
            "Dale a tu cuerpo el cariño que necesita. ¡Sube esos números en la balanza!",
            "No dejes que la delgadez te detenga. ¡Es hora de ganar peso y salud!",
            "Tu salud y vitalidad te esperan en esos kilos adicionales. ¡A comer!",
            "No te preocupes por la báscula, ¡es tu aliada para un peso más saludable!",
            "Aumentar peso es construir fuerza y resistencia. ¡Vamos por más!",
            "Cada kilo extra es un paso hacia una versión más fuerte y vibrante de ti mismo.",
            "La meta no es solo ganar peso, sino bienestar y confianza en ti mismo.",
            "Escucha a tu cuerpo y dale lo que necesita. ¡Es hora de subir de peso!"
        ];
    } else if (texto == 'alto_peso') {
        mensaje = [
            "¡Hora de reducir esos kilos! Tu cuerpo te lo agradecerá.",
            "Es momento de darle un respiro a tu cuerpo con un poco menos de peso.",
            "Dale a tu cuerpo el espacio que necesita. ¡Reduce esos números en la balanza!",
            "No dejes que el exceso de peso te detenga. ¡Es hora de perder peso y ganar salud!",
            "Tu salud y vitalidad te esperan en esos kilos menos. ¡A cuidar tu alimentación!",
            "No te preocupes por las tentaciones, ¡tú puedes lograr un peso más saludable!",
            "Perder peso es ganar en bienestar y vitalidad. ¡Vamos por más!",
            "Cada kilo menos es un paso hacia una versión más ágil y saludable de ti mismo.",
            "La meta no es solo perder peso, sino alcanzar bienestar y confianza en ti mismo.",
            "Escucha a tu cuerpo y dale lo que necesita. ¡Es hora de bajar de peso!"
        ];
    } else if (texto == 'alto_peso1') {
        mensaje = [
            "Es hora de tomar acción contra el exceso de peso. Tu salud te lo agradecerá.",
            "Cuida tu bienestar reduciendo ese exceso de peso que pone en riesgo tu salud.",
            "Tu cuerpo necesita equilibrio. ¡Es momento de reducir esos kilos de más!",
            "No subestimes los riesgos del exceso de peso. ¡Es momento de actuar!",
            "Tu salud es tu mayor tesoro. ¡Es hora de perder peso y ganar en bienestar!",
            "No esperes más para cuidar tu salud. ¡Es momento de tomar decisiones!",
            "Perder peso es ganar en calidad de vida. ¡Vamos por una versión más saludable de ti!",
            "Cada kilo menos es un paso hacia un futuro más saludable y lleno de energía.",
            "La meta no es solo perder peso, sino proteger tu salud y bienestar a largo plazo.",
            "Escucha a tu cuerpo y actúa con responsabilidad. ¡Es hora de reducir ese exceso de peso!"
        ];
    } else if (texto == 'baja_presion') {
        mensaje = [
            "¡Hora de equilibrar esa presión arterial! Tu cuerpo te lo agradecerá con un ritmo más tranquilo.",
            "Es momento de darle un respiro a tu sistema cardiovascular con una presión arterial más baja y estable.",
            "Dale a tu cuerpo el espacio que necesita. ¡Encuentra el balance perfecto en tu presión arterial!",
            "No dejes que la baja presión arterial te desanime. ¡Es hora de tomar medidas para mantener tu salud!",
            "Tu cuerpo te lo agradecerá con una presión arterial más equilibrada. ¡A cuidar tu bienestar!",
            "No te preocupes por las fluctuaciones, ¡tú puedes lograr mantener una presión arterial saludable!",
            "Equilibrar la presión arterial es ganar en bienestar y vitalidad. ¡Vamos por más estabilidad!",
            "Cada ajuste en la presión arterial es un paso hacia una versión más saludable y estable de ti mismo.",
            "La meta no es solo mantener la presión arterial baja, sino alcanzar un equilibrio óptimo para tu salud.",
            "Escucha a tu cuerpo y dale lo que necesita. ¡Es hora de mantener esa presión arterial en armonía!"
        ];
    } else if (texto == 'presion_hiper') {
        mensaje = [
            "¡Hora de cuidar esa prehipertensión! Tu cuerpo te lo agradecerá con un mejor control de la presión arterial.",
            "Es momento de tomar medidas para controlar tu prehipertensión y mantener tu salud en equilibrio.",
            "Dale a tu cuerpo el cuidado que necesita. ¡Es momento de controlar esos números de presión arterial!",
            "No subestimes la prehipertensión. ¡Es hora de tomar acción para mantener tu salud cardiovascular!",
            "Tu cuerpo te lo agradecerá con una presión arterial más estable y dentro de los límites saludables. ¡A cuidar tu bienestar!",
            "No te preocupes, la prehipertensión se puede manejar con cambios en el estilo de vida. ¡Tú puedes lograrlo!",
            "Controlar la prehipertensión es ganar en bienestar y vitalidad. ¡Vamos por más salud cardiovascular!",
            "Cada esfuerzo para controlar la prehipertensión es un paso hacia una versión más saludable y equilibrada de ti mismo.",
            "La meta no es solo controlar la prehipertensión, sino mantener una presión arterial óptima para tu salud a largo plazo.",
            "Escucha a tu cuerpo y dale lo que necesita. ¡Es hora de controlar esa prehipertensión!"
        ];
    } else if (texto == 'presion_alta') {
        mensaje = [
            "¡Hora de controlar esa hipertensión! Tu cuerpo te lo agradecerá con un mejor manejo de la presión arterial.",
            "Es momento de tomar medidas para controlar tu hipertensión y proteger tu salud cardiovascular.",
            "Dale a tu cuerpo el cuidado que necesita. ¡Es momento de controlar esos números de presión arterial!",
            "No subestimes la hipertensión. ¡Es hora de tomar acción para proteger tu corazón y arterias!",
            "Tu cuerpo te lo agradecerá con una presión arterial más estable y dentro de los límites saludables. ¡A cuidar tu bienestar!",
            "No te preocupes, la hipertensión se puede controlar con cambios en el estilo de vida y tratamiento adecuado. ¡Tú puedes lograrlo!",
            "Controlar la hipertensión es ganar en bienestar y vitalidad. ¡Vamos por más salud cardiovascular!",
            "Cada esfuerzo para controlar la hipertensión es un paso hacia una versión más saludable y equilibrada de ti mismo.",
            "La meta no es solo controlar la hipertensión, sino mantener una presión arterial óptima para tu salud a largo plazo.",
            "Escucha a tu cuerpo y dale lo que necesita. ¡Es hora de controlar esa hipertensión!"
        ];
    }

    return mensaje[Math.floor(Math.random() * mensaje.length)];
};