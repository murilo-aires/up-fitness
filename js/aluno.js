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

    // CARREGAR DADOS
    carregarAlunos();
    carregarSolicitacoes();
    carregarSelectAlunos();

};



// ADICIONAR ALUNO
function adicionarAluno(){

    let nome =
    document.getElementById("nomeAluno").value.trim();

    let matriculaAluno =
    document.getElementById("matriculaAluno").value.trim();

    if(nome === "" || matriculaAluno === ""){

        alert("Preencha todos os campos!");
        return;

    }

    const matriculaProfessor =
    localStorage.getItem("matricula");

    let alunos =
    JSON.parse(
        localStorage.getItem(
            "alunos_" + matriculaProfessor
        )
    ) || [];

    alunos.push({

        nome: nome,
        matricula: matriculaAluno

    });

    localStorage.setItem(

        "alunos_" + matriculaProfessor,

        JSON.stringify(alunos)

    );

    document.getElementById("nomeAluno").value = "";
    document.getElementById("matriculaAluno").value = "";

    carregarAlunos();

}



// MOSTRAR ALUNOS
function carregarAlunos(){

    const lista =
    document.getElementById("listaAlunos");

    lista.innerHTML = "";

    const matriculaProfessor =
    localStorage.getItem("matricula");

    let alunos =
    JSON.parse(
        localStorage.getItem(
            "alunos_" + matriculaProfessor
        )
    ) || [];

    alunos.forEach(aluno => {

        lista.innerHTML += `

            <div class="aluno-card">

                <div>

                    <strong>${aluno.nome}</strong><br>

                    Matrícula:
                    ${aluno.matricula}

                </div>

                <button
                    class="btnExcluir"
                    onclick="excluirAluno('${aluno.matricula}')">

                    X

                </button>

            </div>

        `;

    });

}



// EXCLUIR ALUNO
function excluirAluno(matriculaAluno){

    if(!confirm("Deseja excluir este aluno?")){
        return;
    }

    const matriculaProfessor =
    localStorage.getItem("matricula");

    let alunos =
    JSON.parse(
        localStorage.getItem(
            "alunos_" + matriculaProfessor
        )
    ) || [];

    alunos = alunos.filter(aluno =>
        aluno.matricula !== matriculaAluno
    );

    localStorage.setItem(

        "alunos_" + matriculaProfessor,

        JSON.stringify(alunos)

    );

    carregarAlunos();

}



// MOSTRAR SOMENTE AS SOLICITAÇÕES DO PROFESSOR LOGADO
async function carregarSolicitacoes(){

    const matriculaProfessor =
    localStorage.getItem("matricula");

    try{

        const resposta =
        await fetch(
            `../php/listar_solicitacoes.php?professor=${matriculaProfessor}`
        );

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

        <div class="acoes-solicitacao">

            <button
                class="btn-criar"
                onclick="criarTreino(${solicitacao.id})">

                Criar Treino

            </button>

            <button
                class="btn-excluir"
                onclick="excluirSolicitacao(${solicitacao.id})">

                Excluir

            </button>

        </div>

        <hr>

    </div>

`;

        });

    }catch(erro){

        console.error(
            "Erro ao carregar solicitações:",
            erro
        );

    }

}



// EXCLUIR SOLICITAÇÃO
async function excluirSolicitacao(id){

    if(!confirm("Deseja excluir esta solicitação?")){
        return;
    }

    const dados =
    new FormData();

    dados.append("id", id);

    try{

        const resposta =
        await fetch(

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

    }catch(erro){

        alert("Erro ao excluir solicitação.");

        console.error(erro);

    }

}
function carregarSelectAlunos(){

    const select =
    document.getElementById("alunoTreino");

    if(!select) return;

    const matriculaProfessor =
    localStorage.getItem("matricula");

    const alunos =
    JSON.parse(
        localStorage.getItem(
            "alunos_" + matriculaProfessor
        )
    ) || [];

    select.innerHTML =
    '<option value="">Selecione um aluno</option>';

    alunos.forEach(aluno => {

        select.innerHTML += `

            <option value="${aluno.matricula}">
                ${aluno.nome}
            </option>

        `;

    });

}
let matriculaAlunoSelecionado = "";

async function criarTreino(idSolicitacao){

    const matriculaProfessor =
    localStorage.getItem("matricula");

    try{

        const resposta =
        await fetch(
            `../php/listar_solicitacoes.php?professor=${matriculaProfessor}`
        );

        const solicitacoes =
        await resposta.json();

        const solicitacao =
        solicitacoes.find(
            s => s.id == idSolicitacao
        );

        if(!solicitacao){

            alert("Solicitação não encontrada.");
            return;

        }

        matriculaAlunoSelecionado =
        solicitacao.matricula_aluno;

        document.getElementById("idSolicitacao").value =
        idSolicitacao;

        document.getElementById("cardTreino")
        .style.display = "block";

        document.getElementById("cardTreino")
        .scrollIntoView({
            behavior: "smooth"
        });

    }catch(erro){

        console.error(erro);

        alert(
            "Erro ao abrir formulário."
        );

    }

}
async function salvarTreino(){

    const nomeTreino =
    document.getElementById("nomeTreino").value.trim();

    const exercicios =
    document.getElementById("exerciciosTreino").value.trim();

    if(
        nomeTreino === "" ||
        exercicios === ""
    ){

        alert("Preencha todos os campos.");
        return;

    }

    const dados =
    new FormData();

    dados.append(
        "matricula_aluno",
        matriculaAlunoSelecionado
    );

    dados.append(
        "matricula_professor",
        localStorage.getItem("matricula")
    );

    dados.append(
        "nome_treino",
        nomeTreino
    );

    dados.append(
        "exercicios",
        exercicios
    );

    try{

        const resposta =
        await fetch(
            "../php/salvar_treino.php",
            {
                method: "POST",
                body: dados
            }
        );

        const texto =
        await resposta.text();

        alert(texto);

    }catch(erro){

        console.error(erro);

        alert(
            "Erro ao salvar treino."
        );

    }

}