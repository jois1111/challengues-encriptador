



function encriptarTexto() {
    let textoDigitado = document.getElementById('textoIngresado').value;
    let textoEncriptado = "";
    for (let i = 0; i < textoDigitado.length; i++) {
        const element = textoDigitado[i];
        switch (element) {
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += element;
                break;
        }
    }
    document.querySelector('.textEncriptado').innerText = textoEncriptado;
    document.querySelector('.imagenBusqueda').style.display = 'none';
    document.querySelector('.mensaje1').style.display = 'none';
    document.querySelector('.mensaje2').style.display = 'none';
    // document.querySelector('.btnCopiar').style.display = 'block';
    document.getElementById('textoIngresado').value = "";
}



document.getElementById("btnCopiar").addEventListener("click", function () {
    // Obtener el párrafo
    let texto = document.getElementById("textoACopiar");

    // Crear un rango para seleccionar el texto
    let rango = document.createRange();
    rango.selectNodeContents(texto);

    // Obtener la selección actual y borrar cualquier selección previa
    let seleccion = window.getSelection();
    seleccion.removeAllRanges();

    // Agregar el nuevo rango a la selección
    seleccion.addRange(rango);

    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(texto.innerText).then(function () {
        console.log("Texto copiado al portapapeles");
        // Opcional: quitar la selección después de copiar
        setTimeout(() => {
            seleccion.removeAllRanges();
        }, 5000);
    }).catch(function (error) {
        console.error("Error al copiar el texto: ", error);
    });
});

function desencriptarTexto() {
    let textoDigitado = document.getElementById('textoIngresado').value;
    console.log(textoDigitado);
    textoDigitado = textoDigitado.replace(/ai/g, "a");
    textoDigitado = textoDigitado.replace(/enter/g, "e");
    textoDigitado = textoDigitado.replace(/imes/g, "i");
    textoDigitado = textoDigitado.replace(/ober/g, "o");
    textoDigitado = textoDigitado.replace(/ufat/g, "u");
    document.querySelector('.textEncriptado').innerText = textoDigitado;
    document.querySelector('.imagenBusqueda').style.display = 'none';
    document.querySelector('.mensaje1').style.display = 'none';
    document.querySelector('.mensaje2').style.display = 'none';
    document.getElementById('textoIngresado').value = "";
}







