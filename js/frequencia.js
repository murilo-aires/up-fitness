// DIAS DA SEMANA
const diasSemana = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex"
];



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
};



// MOSTRAR ALUNOS
function carregarAlunos(){

    let lista =
    document.getElementById("listaAlunos");

    lista.innerHTML = "";

    let alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

    alunos.forEach((aluno) => {

        let diasHTML = "";

        diasSemana.forEach((dia) => {

            let status =
            localStorage.getItem(
                "freq_" + aluno.matricula + "_" + dia
            );

            let cor = "";

            if(status === "Presente"){

                cor = "verde";

            }
            else if(status === "Falta"){

                cor = "vermelho";

            }

            diasHTML += `

                <div class="dia">

                    <span>${dia}</span>

                    <div class="bolinha ${cor}"></div>

                </div>

            `;
        });

        lista.innerHTML += `

            <div class="aluno">

                <div class="topo-aluno">

                    <div>

                        <strong>${aluno.nome}</strong><br>

                        Matrícula:
                        ${aluno.matricula}

                    </div>

                    <div class="botoes">

                        <button class="presente"
                        onclick="marcar('${aluno.matricula}')">

                            Presente Hoje

                        </button>

                        <button class="falta"
                        onclick="falta('${aluno.matricula}')">

                            Falta Hoje

                        </button>

                    </div>

                </div>

                <div class="dias">

                    ${diasHTML}

                </div>

            </div>

        `;
    });
}



// PEGAR DIA ATUAL
function diaAtual(){

    let hoje = new Date().getDay();

    let dias = {

        1: "Seg",
        2: "Ter",
        3: "Qua",
        4: "Qui",
        5: "Sex"

    };

    return dias[hoje];
}



// MARCAR PRESENTE
function marcar(matricula){

    let dia = diaAtual();

    if(!dia){

        alert("Hoje não é um dia útil.");

        return;
    }

    localStorage.setItem(

        "freq_" + matricula + "_" + dia,

        "Presente"

    );

    carregarAlunos();
}



// MARCAR FALTA
function falta(matricula){

    let dia = diaAtual();

    if(!dia){

        alert("Hoje não é um dia útil.");

        return;
    }

    localStorage.setItem(

        "freq_" + matricula + "_" + dia,

        "Falta"

    );

    carregarAlunos();
}