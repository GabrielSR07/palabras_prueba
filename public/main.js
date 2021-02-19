const table = document.getElementById('tabla');
table.style.display='none';


var ocultar = document.getElementById('ocultar');
var mostrar = document.getElementById('mostrar');

var likes = document.getElementsByClassName('LikeBtn');
var dislikes = document.getElementById('DislikeBtn');




ocultar.style.display = "none";

mostrar.addEventListener("click", mostrarPalabras);
ocultar.addEventListener("click", ocultarPalabras);

function mostrarPalabras() {

    ocultar.style.display = "block";
    mostrar.style.display = "none";
    table.style.display='block';

}

function ocultarPalabras() {
    table.style.display='none';
    ocultar.style.display = "none";
    mostrar.style.display = "block";

}



like1.addEventListener("click", function(){
    palabras.p1.status = true;
    console.log(`La palabra:${palabras.p1.str}es buena`);
});

like2.addEventListener("click", function(){
    palabras.p2.status = true;
    console.log(`La palabra:${palabras.p2.str}es buena`);
});

like3.addEventListener("click", function(){
    palabras.p3.status = true;
    console.log(`La palabra:${palabras.p3.str}es buena`);
});

dislike1.addEventListener("click", function(){
    palabras.p1.status = false;
    console.log(`La palabra:${palabras.p1.str}es mala`);
});

dislike2.addEventListener("click", function(){
    palabras.p2.status = false;
    console.log(`La palabra:${palabras.p2.str}es mala`);
});

dislike3.addEventListener("click", function(){
    palabras.p3.status = false;
    console.log(`La palabra:${palabras.p3.str}es mala`);
});




var palabras = {

    p1 : {
        str:first.innerText,
        status:false
    },

    p2 : {
        str:second.innerText,
        status:true
    },

    p3 : {
        str:third.innerText,
        status:false
        
    }

}
/*
CONSTRUCTOR EN CASO DE QUE LAS PALABRAS SE INGRESEN DESDE EL SITIO WEB

function palabras(str,status) {
    this.str = str,
    this.status = status
} 
*/ 