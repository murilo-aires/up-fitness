let planoSelecionado = "Pro";

function selecionarPlano(plano, el){
    planoSelecionado = plano;

    document.querySelectorAll(".plano").forEach(p => p.classList.remove("ativo"));
    el.classList.add("ativo");
}

/* METODO */
function selecionarMetodo(tipo, el){
    document.querySelectorAll(".metodo").forEach(m => m.classList.remove("ativo"));
    el.classList.add("ativo");

    document.getElementById("cartao").classList.add("hidden");
    document.getElementById("pix").classList.add("hidden");
    document.getElementById("dinheiro").classList.add("hidden");

    document.getElementById(tipo).classList.remove("hidden");
}

/* PAGAMENTO */
function pagar(){
    document.getElementById("status").innerText =
        "Pagamento realizado com sucesso! Plano escolhido: " + planoSelecionado;
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