function inicio(){
    const miButton= document.getElementById("button");
    const miButton2= document.getElementById("button2");
    const input1= document.getElementById("input1");
    const input2= document.getElementById("input2");
    const texto= document.getElementById("texto");
    var notas={};
    
    miButton.addEventListener("click", function(){
        if (notas[input1.value]) {
            let persona = notas[input1.value];
            persona["notas"].push(input2.value);
        }else{
            notas[input1.value] = {notas : [input2.value]};
        }
    })

    miButton2.addEventListener("click", function(){
        texto.innerHTML = "";
        for (let nombre in notas) {
            texto.innerHTML +=  nombre + ": " + notas[nombre].notas.join(", ");
        }
    })
    


}

window.addEventListener("load",inicio);