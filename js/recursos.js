function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso === "" || altura === "") {
        resultadoIMC.innerText = "Preencha todos os campos!";
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Magreza";
    else if (imc < 25) classificacao = "Normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    document.getElementById("resultadoIMC").innerText =
        "IMC: " + imc.toFixed(2) + " (" + classificacao + ")";
}

function calcularCalorias() {
    let tmb = 10 * pesoCal.value + 6.25 * alturaCal.value - 5 * idade.value;
    resultadoCal.innerText = Math.round(tmb) + " kcal";
}

function agendar() {
    let data = document.getElementById("dataTreino").value;
    let hora = document.getElementById("horaTreino").value;
    let maquina = document.getElementById("maquina").value;

    if (data === "" || hora === "" || maquina === "") {
        alert("Preencha tudo!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = `${data} às ${hora} - ${maquina}`;

    document.getElementById("listaAgendamentos").appendChild(li);
}

function adicionarPeso() {
    let li = document.createElement("li");
    li.innerText = pesoEvolucao.value + " kg";
    listaPesos.appendChild(li);
}

function gerarTreino() {
    let objetivo = document.getElementById("objetivo").value;
    let nivel = document.getElementById("nivel").value;

    // LISTAS DE EXERCÍCIOS
    const peito = ["Supino", "Supino Inclinado", "Crucifixo", "Flexão"];
    const perna = ["Agachamento", "Leg Press", "Afundo", "Cadeira Extensora"];
    const costas = ["Puxada na Barra", "Remada", "Barra Fixa"];
    const braco = ["Rosca Direta", "Rosca Alternada", "Tríceps Corda", "Tríceps Testa"];
    const cardio = ["Corrida", "Bicicleta", "Pular Corda", "Escada"];
    const funcional = ["Burpee", "Mountain Climber", "Polichinelo"];

    function pegarAleatorio(lista) {
        return lista[Math.floor(Math.random() * lista.length)];
    }

    let treino = "";

    if (objetivo === "emagrecer") {

        treino += "🔥 TREINO PARA EMAGRECIMENTO:\n\n";

        let tempoCardio = nivel === "iniciante" ? "15-20min" : "25-40min";

        treino += `Cardio: ${pegarAleatorio(cardio)} (${tempoCardio})\n\n`;

        for (let i = 0; i < 4; i++) {
            treino += `• ${pegarAleatorio(funcional)} - 3x12\n`;
        }

    } else {

        treino += "💪 TREINO DE HIPERTROFIA:\n\n";

        let series = nivel === "iniciante" ? "3x10" : "4x12";

        treino += `Peito: ${pegarAleatorio(peito)} - ${series}\n`;
        treino += `Costas: ${pegarAleatorio(costas)} - ${series}\n`;
        treino += `Perna: ${pegarAleatorio(perna)} - ${series}\n`;
        treino += `Braço: ${pegarAleatorio(braco)} - ${series}\n`;

    }

    document.getElementById("treino").innerText = treino;
}

/* CRONÔMETRO */
let tempo = 0;
let intervalo;

function formatarTempo(segundosTotais) {
    let horas = Math.floor(segundosTotais / 3600);
    let minutos = Math.floor((segundosTotais % 3600) / 60);
    let segundos = segundosTotais % 60;

    // adiciona zero na frente (01, 02...)
    horas = horas.toString().padStart(2, "0");
    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");

    return `${horas}:${minutos}:${segundos}`;
}

function iniciar() {
    clearInterval(intervalo); // evita duplicar

    intervalo = setInterval(() => {
        tempo++;
        document.getElementById("tempo").innerText = formatarTempo(tempo);
    }, 1000);
}

function parar() {
    clearInterval(intervalo);
}

function resetar() {
    clearInterval(intervalo);
    tempo = 0;
    document.getElementById("tempo").innerText = "00:00:00";
}

window.onload = function(){

    const matricula = localStorage.getItem("matricula");
    const loginFoto = document.getElementById("loginFoto");

    if(matricula && loginFoto){
        const fotoSalva = localStorage.getItem("foto_" + matricula);

        if(fotoSalva){
            loginFoto.src = fotoSalva;
        }
    }

}
document
.getElementById("formSolicitacao")

.addEventListener("submit", async function(e){

    e.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const objetivo =
    document.getElementById("objetivo").value;

    const observacoes =
    document.getElementById("observacoes").value;

    const dados = new FormData();

    dados.append("nome", nome);
    dados.append("objetivo", objetivo);
    dados.append("observacoes", observacoes);

    const resposta = await fetch(
        "../php/solicitar_treino.php",
        {
            method: "POST",
            body: dados
        }
    );

    const texto = await resposta.text();

    alert(texto);

});