// WINDOW ONLOAD ÚNICO
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