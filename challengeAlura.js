//Requisito debe funcionar sólo con letra minúscula
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
function encriptar(){                                  //toLowerCase para que escriba en minúscula aunque el usuario use mayuscula
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    document.getElementById("lupa").style.display="none";
    document.getElementById("ninguno").style.display="none";
    //i es para que afecte tanto mayuscula como minuscula
    //g  para todo la lionea de la oración
    //m es para que afecte m{ultiples líneas o párrafos}
    var txtCifrado= texto.replace(/e/igm,"enter");
    var txtCifrado= txtCifrado.replace(/i/igm,"imes");
    var txtCifrado= txtCifrado.replace(/a/igm,"ai");
    var txtCifrado= txtCifrado.replace(/o/igm,"ober");
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat");
// para hacer desaparecer la imagen de la lupa y el texto que dice que no hay nada para incriptar
// en su lugar quede para ingresar area de texto 2 y el boton de copiar
//hacemos: (recordar que siempre el getElementById (se coloca un "id"))
//cuando toque boton se me va a desparecer la imagen junto con el texto de abajo



//tiene que aparecerme en su lugar el texto2
document.getElementById("texto2").innerHTML=txtCifrado;
//ahora el botón copiar (no se tiene que ver al iniciar la pagina)
document.getElementById("copiar").style.display="show";
//cuando aparece ocupa este lugar:
document.getElementById("copiar").style.display="inherit";

}                                                            


function desencriptar(){                                  //toLowerCase para que escriba en minúscula aunque el usuario use mayuscula
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayuscula como minuscula
    //g  para todo la lionea de la oración
    //m es para que afecte m{ultiples líneas o párrafos}
    var txtCifrado= texto.replace(/enter/igm,"e");
    var txtCifrado= txtCifrado.replace(/imes/igm,"i");
    var txtCifrado= txtCifrado.replace(/ai/igm,"a");
    var txtCifrado= txtCifrado.replace(/ober/igm,"o");
    var txtCifrado= txtCifrado.replace(/ufat/igm,"u");
// para hacer desaparecer la imagen de la lupa y el texto que dice que no hay nada para incriptar
// en su lugar quede para ingresar area de texto 2 y el boton de copiar
//hacemos: (recordar que siempre el getElementById (se coloca un "id"))
//cuando toque boton se me va a desparecer la imagen junto con el texto de abajo
document.getElementById("lupa").style.display="none";
document.getElementById("ninguno").style.display="none";
//tiene que aparecerme en su lugar el texto2
document.getElementById("texto2").innerHTML=txtCifrado;
//ahora el botón copiar (no se tiene que ver al iniciar la pagina)
document.getElementById("copiar").style.display="show";
//cuando aparece ocupa este lugar:
document.getElementById("copiar").style.display="inherit";

}  

function copy(){
    //recordar que a queryselector hay que ponerle el asterisco al id
    var contenido=document.querySelector("#texto2");
    //Vamos a pedir que seleccione lo que esté en el texto2
    contenido.select();
    //ahora el comando de copiar
    document.execCommand("copy");
    alert("¡Copiado!");
}