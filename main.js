var mostrar = document.getElementById('mostrar');
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var ocultar = document.getElementById('ocultar');

var like1 = document.getElementById('firstLike');
var like2 = document.getElementById('secondLike');
var like3 = document.getElementById('thirdLike');
var dislike1 = document.getElementById('firstDislike');
var dislike2 = document.getElementById('secondDislike');
var dislike3 = document.getElementById('thirdDislike');


first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
ocultar.style.display = "none";

mostrar.addEventListener("click", mostrarPalabras);
ocultar.addEventListener("click", ocultarPalabras);

function mostrarPalabras() {

    first.style.display = "block";
    second.style.display = "block";
    third.style.display = "block";
    ocultar.style.display = "block";
    mostrar.style.display = "none";

}

function ocultarPalabras() {

    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
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