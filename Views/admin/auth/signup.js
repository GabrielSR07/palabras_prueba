const layout=require('../layout');








module.exports=(local=Array(1000).fill(''))=>{

 
    table='';
    let size = 39;
    for (i = 0; i < size; i++) {

        if(i<(size/3)){
        table += `<td class="columna"><p class="palabraArray">${local[i]}</p><span><input type="button" value="Like" class="likeBtn btn"><input type="button" value="Dislike" class="DislikeBtn btn"></td><tr><td><br></td></tr>`;
         }
        else if(i>=(size/3) && i <((size/3)*2) ) {
            table +=  `<td class="columna"><p class="palabraArray">${local[i]}</p><span><input type="button" value="Like" class="likeBtn btn"><input type="button" value="Dislike" class="DislikeBtn btn"></td><tr><td><br></td></tr>`;
        }
        else if(i>=(size/3)*2) {
            table += `<td class="columna"><p class="palabraArray">${local[i]}</p><span><input type="button" value="Like" class="likeBtn btn"><input type="button" value="Dislike" class="DislikeBtn btn"></td><tr><td><br></td></tr>`;
        }

    }



    return layout({
        
        
        content:`
        <title>Probar Palabras</title>
        <link rel="stylesheet" href="styles.css">
       
        
        
        <h2 class="titulo">Generador de nombre aleatorios</h2>
        <p class="descripcion">
        En esta app, debes ingresar 4 palabras en el formulario y generaremos posibles nombres para tu empresa, los cuales debes calificar
        </p>

    <div id="tabla">
    <table>

    <tr>`+

    
    
    table

   + `</tr>

    </table>
    </div>
    
    

    <form method="POST" class="form">


    <input name="fname" type="text" placeholder="1era Palabra" class="word" ><br>
    <input name="kname" type="text" placeholder="2da Palabra" class="word"><br>
    <input name="lname" type="text" placeholder="3era Palabra" class="word"><br>
    <input name="nname" type="text" placeholder="4ta Palabra" class="word"><br>
    <br></br>
    <div class="btns">
        <input type="submit" value="Enviar" class="btn">
        <br></br>
        <input type="button" id="mostrar" value="Mostrar palabras" class="btn">
        <input type="button" id="ocultar" value="Ocultar palabras" class="btn">
    </div>




        </form>
    
        

    <script src="main.js"></script>`


});

};