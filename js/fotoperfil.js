
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