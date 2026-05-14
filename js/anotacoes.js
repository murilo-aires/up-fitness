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

    // FUNÇÕES DA PÁGINA
    carregarSelectAlunos();

    carregarAnotacoes();

}



// CARREGAR ALUNOS NO SELECT
function carregarSelectAlunos(){

    let select =
    document.getElementById("alunoAnotacao");

    // LIMPAR OPTIONS DUPLICADAS
    select.innerHTML = `
        <option value="">
            Selecione um aluno
        </option>
    `;

    let alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

    alunos.forEach((aluno) => {

        select.innerHTML += `
        
            <option value="${aluno.matricula}">
                ${aluno.nome}
            </option>

        `;
    });
}



// SALVAR ANOTAÇÃO
function salvarAnotacao(){

    let matricula =
    document.getElementById("alunoAnotacao").value;

    let texto =
    document.getElementById("textoAnotacao").value;

    if(matricula === "" || texto === ""){

        alert("Preencha todos os campos!");

        return;
    }

    let anotacoes =
    JSON.parse(localStorage.getItem("anotacoes")) || [];

    anotacoes.push({

        matricula: matricula,
        texto: texto

    });

    localStorage.setItem(
        "anotacoes",
        JSON.stringify(anotacoes)
    );

    document.getElementById("textoAnotacao").value = "";

    carregarAnotacoes();
}



// MOSTRAR ANOTAÇÕES
function carregarAnotacoes(){

    let lista =
    document.getElementById("listaAnotacoes");

    lista.innerHTML = "";

    let alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

    let anotacoes =
    JSON.parse(localStorage.getItem("anotacoes")) || [];

    anotacoes.forEach((anotacao) => {

        let aluno =
        alunos.find(a =>
            a.matricula === anotacao.matricula
        );

        lista.innerHTML += `

            <div class="anotacao">

                <strong>

                    ${aluno ? aluno.nome : "Aluno"}

                </strong>

                <br><br>

                ${anotacao.texto}

            </div>

        `;
    });
}