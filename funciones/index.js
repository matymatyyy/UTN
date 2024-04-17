window.addEventListener("load", function(){
    const listaRecuperadaJSON = localStorage.getItem('users');
    const listaRecuperada = JSON.parse(listaRecuperadaJSON);
    const input1 = document.getElementById("inputName");
    const input2 = document.getElementById("inputPassword");
    const buttonLogin= document.getElementById("buttonLogin");
    const texto = document.getElementById("alerta");
    console.log(listaRecuperada)

    buttonLogin.addEventListener("click", function () {
        if(existe(input1.value, input2.value)){
                window.location.replace("./template/comprar.html");
        }else{
            texto.innerHTML = "usuario o contraseña erroneo"
        }
    })
    function existe(nombre,contraseña){
        for (let i = 0; i < listaRecuperada.length; i++) {
            let persona= listaRecuperada[i];
            if (persona["name"]==nombre) {
                if (persona["password"]==contraseña) {
                    return true;
                }
            }
        }
        return false;
    }
})