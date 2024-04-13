function inicio(){
    const miButton = document.getElementById("button");
    const miButton2 = document.getElementById("button2");
    const miButton3 = document.getElementById("button3");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const texto = document.getElementById("texto");
    var productos = [];

    function existe(){
        for (let i = 0; i < productos.length; i++) {
            let prod= productos[i];
            if (prod["nombre"]==input1.value) {
                prod["cantidad"]= parseInt(prod["cantidad"])+ parseInt(input3.value);
                return true;
            }
        }
        return false;
    }

    miButton.addEventListener("click", function(){
        var nombre = input1.value;
        var precio = input2.value;
        var cantidad = input3.value;

        if (existe()) {
            console.log("Producto ya existe");
        } else if(input3.value=="0") {
            alert("no menor a 0 la cantidad")
            
        }else{
            productos.push( { nombre: nombre, precio: precio, cantidad: cantidad });
        }
    });

    miButton2.addEventListener("click", function(){
        texto.innerHTML = "";
        for (let i = 0; i < productos.length; i++) {
            let prod= productos[i];
            texto.innerHTML += "nombre del producto: "+ prod["nombre"] + " ";
            texto.innerHTML += "precio del producto: $"+ prod["precio"]+ " ";    
            texto.innerHTML += "cantidad del producto: "+ prod["cantidad"]+ " <br>";        
        }
    });

    miButton3.addEventListener("click", function(){
        for (let i = 0; i < productos.length; i++) {
            let prod= productos[i];
            if (prod["nombre"]==input1.value) {
                productos.pop(i);
            }
            
        }
    });
}

window.addEventListener("load", inicio);
