window.addEventListener("load", function(){
    const inputName = document.getElementById("inputName");
    const inputPassword = document.getElementById("inputPassword");
    const buttonRegister = document.getElementById("buttonRegister");
    const texto = document.getElementById("textoAlerta");
    var usuarios= [];

    buttonRegister.addEventListener("click", function(){
        var usuario = {
            name : inputName.value,
            password : inputPassword.value
        }
        let name = inputName.value;
        let password = inputPassword.value;
        
        if (name == "" || password == "") {
            texto.innerHTML= "tiene que rellenar los dos campos";
        }else{
            usuarios.push(usuario);
            texto.innerHTML = "usuario creado con exito, ahora lo redirigimos para que inicie sesion";
            lista(usuarios);
            setTimeout(function() {
                window.location.replace("../index.html");
            }, 5000);
        }
    })
    
    function lista(array){
        if (localStorage.getItem("users")) {
            let misUsuarios= localStorage.getItem("users")
            const listaRecuperada = JSON.parse(misUsuarios);
            for (let i = 0; i < listaRecuperada.length; i++) {
                let persona = listaRecuperada[i];
                usuarios.push(persona)
            }
        }
        const listaJSON = JSON.stringify(array);
        localStorage.setItem("users", listaJSON);
    }
})
