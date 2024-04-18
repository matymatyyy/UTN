window.addEventListener("load", function(){
    const miButton = document.getElementById("button");
    const miButton2 = document.getElementById("button2");
    const miButton3 = document.getElementById("button3");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const texto = document.getElementById("texto");
    const mibutton4 = document.getElementById("button4");
    var productos =[];
    baseDato();
    function existe(nombre,cantidad){
        for (let i = 0; i < productos.length; i++) {
            let prod= productos[i];
            if (prod["nombre"]==nombre) {
                prod["cantidad"]= parseInt(prod["cantidad"])+ parseInt(cantidad);
                prod["precio"]=input2.value;
                return true;
            }
        }
        return false;
    }

    miButton.addEventListener("click", function(){
        let nombre = input1.value;
        let precio = input2.value;
        let cantidad = input3.value;
        if(parseInt(cantidad)==0 || (cantidad)=="" || parseInt(cantidad)<0) {
            texto.innerHTML = "la cantidad debe ser mayor a 0";
        }
        else if (existe(nombre,cantidad)) {
            texto.innerHTML = "el producto ya existe,sumaremos la cantidad";
        }else{
            texto.innerHTML = "se agrego: "+ nombre+", precio del producto: $"+ precio+", cantidad del producto: "+cantidad;
            productos.push( { nombre: nombre, precio: precio, cantidad: cantidad });
            cargaDB();
        }
    });

    miButton2.addEventListener("click", function(){
        texto.innerHTML = "";
        if (productos.length == 0) {
            texto.innerHTML = "no hay productos";
        }else{
            for (let i = 0; i < productos.length; i++) {
                let prod= productos[i];
                texto.innerHTML += "nombre del producto: "+ prod["nombre"] + " ";
                texto.innerHTML += "precio del producto: $"+ prod["precio"]+ " ";    
                texto.innerHTML += "cantidad del producto: "+ prod["cantidad"]+ " <br>";        
            }
        }
    });

    miButton3.addEventListener("click", function(){
        let nombre = input1.value;
        for (let i = 0; i < productos.length; i++) {
            let prod= productos[i];
            if (prod["nombre"]==nombre) {
                productos = productos.filter((i) => i !== prod);
                texto.innerHTML = "producto eliminado: "+nombre;
                break;
            }
            texto.innerHTML = "producto no existe";
        }
    });

   
    function baseDato(){
        if (localStorage.getItem("productos")) {
            let misProductos= localStorage.getItem("productos");
            const listaRecuperada = JSON.parse(misProductos);
            for (let i = 0; i < listaRecuperada.length; i++) {
                let persona = listaRecuperada[i];
                productos.push(persona)
            }
        }
        const listaJSON = JSON.stringify(productos);
        localStorage.setItem("productos", listaJSON);
    }
    function cargaDB() {
        const listaJSON = JSON.stringify(productos);
        localStorage.setItem("productos", listaJSON);
    }
});
