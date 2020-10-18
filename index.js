const button = document.getElementById("enviar");
const buttonclick = (e) => {
    e.preventDefault();
    let primeiro = document.getElementById("primeiro").value; 
    if (Number(primeiro)) {
        let segundo = document.getElementById("segundo").value;
        if (Number(segundo)) {
            let primeirobackup = primeiro;
            let segundobackup = segundo;
            let resultado = primeiro / segundo;
            let resto = primeiro % segundo;
            const div = document.getElementById("resultado");
            if (resto == 0) {
                div.insertAdjacentHTML("afterbegin", `<p>MDC(${primeiro}, ${segundo}) = ${segundo}</p>`);
            } else {
                while (resto != 0) {
                    primeiro = segundo; 
                    segundo = resto;
                    resto = primeiro % segundo;
                }
                div.insertAdjacentHTML("afterbegin", `<p>MDC(${primeirobackup}, ${segundobackup}) = ${segundo}</p>`)
            }
        } else {
            alert("Valor inválido");
        }
    } else {
        alert("Valor inválido");
    }
}
button.addEventListener("click", buttonclick);