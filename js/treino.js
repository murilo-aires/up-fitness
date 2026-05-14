window.onload = function(){

    // FOTO DE PERFIL
    const matricula = localStorage.getItem("matricula");
    const loginFoto = document.getElementById("loginFoto");

    if(matricula && loginFoto){

        const fotoSalva = localStorage.getItem("foto_" + matricula);

        if(fotoSalva){
            loginFoto.src = fotoSalva;
        }
    }

    // CARREGAR TREINOS
    carregarTreinos();
};



// ADICIONAR TREINO
function adicionarTreino() {

    let exercicio = document.getElementById("exercicio").value;
    let series = document.getElementById("series").value;

    if (exercicio === "" || series === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // PEGAR TREINOS
    let treinos = JSON.parse(localStorage.getItem("treinos")) || [];

    // ADICIONAR NOVO
    treinos.push({
        exercicio: exercicio,
        series: series
    });

    // SALVAR
    localStorage.setItem("treinos", JSON.stringify(treinos));

    // ATUALIZAR LISTA
    carregarTreinos();

    // LIMPAR INPUTS
    document.getElementById("exercicio").value = "";
    document.getElementById("series").value = "";
}



// MOSTRAR TREINOS
function carregarTreinos() {

    let lista = document.getElementById("listaTreino");

    lista.innerHTML = "";

    let treinos = JSON.parse(localStorage.getItem("treinos")) || [];

    treinos.forEach((treino, index) => {

        lista.innerHTML += `
            <div class="treino-item">

                <strong>${treino.exercicio}</strong><br>
                ${treino.series}

                <button class="btn-remover" onclick="removerTreino(${index})">
                    Remover
                </button>

            </div>
        `;
    });
}



// REMOVER TREINO
function removerTreino(index) {

    let treinos = JSON.parse(localStorage.getItem("treinos")) || [];

    treinos.splice(index, 1);

    localStorage.setItem("treinos", JSON.stringify(treinos));

    carregarTreinos();
}