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

            localStorage.setItem(
                "foto_" + matricula,
                e.target.result
            );

            const loginFoto =
            document.getElementById("loginFoto");

            if(loginFoto){
                loginFoto.src = e.target.result;
            }
        };

        leitor.readAsDataURL(arquivo);
    }
});

// SALVAR DADOS
function salvar(){

    const matricula =
    localStorage.getItem("matricula");

    if(!matricula){

        alert("Erro: usuário não identificado.");
        return;
    }

    localStorage.setItem(
        "nome_" + matricula,
        document.getElementById("nome").value
    );

    localStorage.setItem(
        "cpf_" + matricula,
        document.getElementById("cpf").value
    );

    localStorage.setItem(
        "telefone_" + matricula,
        document.getElementById("telefone").value
    );

    localStorage.setItem(
        "data_" + matricula,
        document.getElementById("data").value
    );

    alert("Dados salvos com sucesso!");
}

// CARREGAR DADOS
window.onload = function(){

    const matricula =
    localStorage.getItem("matricula");

    const loginFoto =
    document.getElementById("loginFoto");

    document.getElementById("matricula").value =
        matricula || "";

    if(!matricula){
        return;
    }

    const fotoSalva =
    localStorage.getItem("foto_" + matricula);

    if(fotoSalva){

        foto.src = fotoSalva;

        if(loginFoto){
            loginFoto.src = fotoSalva;
        }
    }

    document.getElementById("nome").value =
        localStorage.getItem("nome_" + matricula) || "";

    document.getElementById("cpf").value =
        localStorage.getItem("cpf_" + matricula) || "";

    document.getElementById("telefone").value =
        localStorage.getItem("telefone_" + matricula) || "";

    document.getElementById("data").value =
        localStorage.getItem("data_" + matricula) || "";
};