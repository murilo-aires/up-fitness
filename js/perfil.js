const input = document.getElementById("upload");
const foto = document.getElementById("foto");

// TROCAR FOTO
input.addEventListener("change", function(){
    const arquivo = this.files[0];
    const matricula = localStorage.getItem("matricula");

    if(arquivo && matricula){
        const leitor = new FileReader();

        leitor.onload = function(e){
            foto.src = e.target.result;

            // salva por usuário
            localStorage.setItem("foto_" + matricula, e.target.result);
        }

        leitor.readAsDataURL(arquivo);
    }
});

// SALVAR DADOS
function salvar(){
    const matricula = localStorage.getItem("matricula");

    if(!matricula){
        alert("Erro: usuário não identificado.");
        return;
    }

    localStorage.setItem("nome_" + matricula, document.getElementById("nome").value);
    localStorage.setItem("cpf_" + matricula, document.getElementById("cpf").value);
    localStorage.setItem("telefone_" + matricula, document.getElementById("telefone").value);
    localStorage.setItem("data_" + matricula, document.getElementById("data").value);

    alert("Dados salvos!");
}

// CARREGAR DADOS
window.onload = function(){

    const matricula = localStorage.getItem("matricula");
    const loginFoto = document.getElementById("loginFoto");

    // MATRÍCULA
    document.getElementById("matricula").value = matricula || "";

    if(!matricula) return;

    // FOTO PERFIL
    if(localStorage.getItem("foto_" + matricula)){
        foto.src = localStorage.getItem("foto_" + matricula);
    }

    // FOTO NO ÍCONE
    if(loginFoto && localStorage.getItem("foto_" + matricula)){
        loginFoto.src = localStorage.getItem("foto_" + matricula);
    }

    // DADOS
    document.getElementById("nome").value =
        localStorage.getItem("nome_" + matricula) || "";

    document.getElementById("cpf").value =
        localStorage.getItem("cpf_" + matricula) || "";

    document.getElementById("telefone").value =
        localStorage.getItem("telefone_" + matricula) || "";

    document.getElementById("data").value =
        localStorage.getItem("data_" + matricula) || "";
}