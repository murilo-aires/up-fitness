window.onload = function(){

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

    carregarTreinos();
    carregarProfessores();

}



// CARREGAR TREINOS DO PROFESSOR
async function carregarTreinos(){

    const matricula =
    localStorage.getItem("matricula");

    const lista =
    document.getElementById("listaTreino");

    lista.innerHTML = "";

    try{

        const resposta =
        await fetch(
            `../php/listar_treino_aluno.php?matricula=${matricula}`
        );

        const treinos =
        await resposta.json();

        if(treinos.length === 0){

            lista.innerHTML = `

                <p>
                    Nenhum treino enviado pelo professor.
                </p>

            `;

            return;

        }

        treinos.forEach(treino => {

            lista.innerHTML += `

                <div class="treino-item">

                    <h3>
                        ${treino.nome_treino}
                    </h3>

                    <pre>
${treino.exercicios}
                    </pre>

                    <button
                        class="btn-remover"
                        onclick="excluirTreino(${treino.id})">

                        Excluir

                    </button>

                </div>

            `;

        });

    }catch(erro){

        console.error(erro);

        lista.innerHTML =
        "<p>Erro ao carregar treinos.</p>";

    }

}



// EXCLUIR TREINO
async function excluirTreino(id){

    if(!confirm("Deseja excluir este treino?")){
        return;
    }

    const dados =
    new FormData();

    dados.append("id", id);

    try{

        const resposta =
        await fetch(
            "../php/excluir_treino.php",
            {
                method: "POST",
                body: dados
            }
        );

        const texto =
        await resposta.text();

        alert(texto);

        carregarTreinos();

    }catch(erro){

        console.error(erro);

        alert("Erro ao excluir treino.");

    }

}