window.addEventListener("load", function(){
    const misProductos=localStorage.getItem("productos");
    var misProductosrecuperar =JSON.parse(misProductos);
    const inputObjeto = document.getElementById("objeto");
    const inputCantidad = document.getElementById("cantidad");
    const buttonComprar = document.getElementById("comprar");
    const texto = document.getElementById("iteams");
    const alerta = document.getElementById("alerta");
    listado(misProductosrecuperar);
    
    function listado(misProductosrecuperar) {
        texto.innerHTML = "";
        for (let i = 0; i < misProductosrecuperar.length; i++) {
            let producto = misProductosrecuperar[i];
            console.log(producto)
            texto.innerHTML += "producto es :"+producto["nombre"];
            texto.innerHTML += ",el precio por unidad es " + producto["precio"];
            texto.innerHTML += " la cantidad disponible es " + producto["cantidad"] + "<br>";
        }
    }
    
    buttonComprar.addEventListener("click", function(){
        let name=inputObjeto.value;
        let cantidad= inputCantidad.value;

        if (existe(name)) {
            if (parseInt(cantidad)>0) {
                if (cantidades(name,cantidad)) {
                    alerta.innerHTML="Compra exitosa";
                    listado(misProductosrecuperar);
                    db(misProductosrecuperar);
                }else{
                    alerta.innerHTML="la cantidad es mayor a la existente";
                }
            }else{
                alerta.innerHTML= "la cantidad debe ser mayor a 0";
            }
        }else{
            alerta.innerHTML= "producto no encontrado";
        }
    })
    function existe(name){
        for (let i = 0; i < misProductosrecuperar.length; i++) {
            let producto= misProductosrecuperar[i];
            console.log(producto)
            if (producto["nombre"]== name) {
                return true;
            }
            
        }
        return false;
    }
    function cantidades(name,cantiadad){
        for (let i = 0; i < misProductosrecuperar.length; i++) {
            let producto= misProductosrecuperar[i];
            console.log(producto)
            if (producto["nombre"]== name) {
                let back=producto["cantidad"];
                producto["cantidad"]=parseInt(producto["cantidad"])-parseInt(cantiadad);
                if(parseInt(producto["cantidad"])===0){
                        misProductosrecuperar = misProductosrecuperar.filter((i) => i !== producto);
                        return true;
                }
                if (parseInt(producto["cantidad"])<0) {
                    producto["cantidad"]==back;
                    return false
                }
                return true;
            }   
        }
    }
    function db(array){
            const listaJSON = JSON.stringify(array);
            localStorage.setItem("productos", listaJSON);
    }
    function borrar(){
        console.log(misProductosrecuperar)
        for (let i = 0; i < misProductosrecuperar.length; i++) {
            let producto= misProductosrecuperar[i];
            console.log(producto)
            if(parseInt(producto["cantidad"])===0){
                misProductosrecuperar = misProductosrecuperar.filter((i) => i !== producto);
                break;
            }
        }
    }
})