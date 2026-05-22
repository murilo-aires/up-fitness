window.onload = function(){

    // FOTO DE PERFIL
    const matricula =
    localStorage.getItem("matricula");

    const loginFoto =
    document.getElementById("loginFoto");

    if(matricula && loginFoto){

        const fotoSalva =
        localStorage.getItem("foto_" + matricula);

        if(fotoSalva){

            loginFoto.src = fotoSalva;

        }
    }

    // CARREGAR ALUNOS
    carregarAlunos();

    // CARREGAR SOLICITAÇÕES
    carregarSolicitacoes();
    
    carregarAlunos();

    carregarSolicitacoes();


}



// ADICIONAR ALUNO
function adicionarAluno(){

    let nome =
    document.getElementById("nomeAluno").value;

    let matricula =
    document.getElementById("matriculaAluno").value;

    if(nome === "" || matricula === ""){

        alert("Preencha todos os campos!");

        return;
    }

    let alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

    alunos.push({

        nome: nome,
        matricula: matricula

    });

    localStorage.setItem(
        "alunos",
        JSON.stringify(alunos)
    );

    carregarAlunos();

    document.getElementById("nomeAluno").value = "";
    document.getElementById("matriculaAluno").value = "";
}



// MOSTRAR ALUNOS
function carregarAlunos(){

    let lista =
    document.getElementById("listaAlunos");

    lista.innerHTML = "";

    let alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

    alunos.forEach((aluno) => {

        lista.innerHTML += `
        
            <div class="aluno">

                <strong>${aluno.nome}</strong><br>

                Matrícula:
                ${aluno.matricula}

            </div>

        `;
    });

}
async function carregarSolicitacoes(){

    const resposta =
    await fetch("../php/listar_solicitacoes.php");

    const solicitacoes =
    await resposta.json();

    const lista =
    document.getElementById("listaSolicitacoes");

    lista.innerHTML = "";

    solicitacoes.forEach(solicitacao => {

        lista.innerHTML += `

        <div class="solicitacao-item">

            <strong>
                ${solicitacao.aluno_nome}
            </strong>

            <p>
                <b>Objetivo:</b>
                ${solicitacao.objetivo}
            </p>

            <p>
                ${solicitacao.observacoes}
            </p>

            <button
            class="btn-excluir"
            onclick="excluirSolicitacao(${solicitacao.id})">

                Excluir

            </button>

            <hr>

        </div>

        `;

    });

}
async function excluirSolicitacao(id){

    if(!confirm("Deseja excluir esta solicitação?")){

        return;

    }

    const dados = new FormData();

    dados.append("id", id);

    const resposta = await fetch(

        "../php/excluir_solicitacao.php",

        {
            method: "POST",
            body: dados
        }

    );

    const texto =
    await resposta.text();

    alert(texto);

    carregarSolicitacoes();

}