
let form = document.querySelector(".form")

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector("#weight");
    const inputAltura = e.target.querySelector("#height");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido");
        return;
    }

    if (!altura) {
        setResultado("Altura inválida");
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} você está ${nivelImc}`;

    if(color == 1){
        color = 0;
        setResultado(msg, true);
    }else{
        setResultado(msg, false);

    }
    });
    
    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
        }
        
let color
function getNivelImc(imc) {
    const nivel = ['ABAIXO do peso', 'Peso NORMAL', 'SOBREPESO', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5){ 
        color = 1
        return nivel[1]
    };
    if (imc < 18.5) return nivel[0];
}

function criaP() {
    const p = document.createElement("p");
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#result")
    resultado.innerHTML = "";

    const p = criaP();

    p.classList.add('good');
    if (isValid) {
            p.classList.remove('bad');
            p.classList.add('good');
    } else {
        p.classList.remove("good");
        p.classList.add("bad");
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

