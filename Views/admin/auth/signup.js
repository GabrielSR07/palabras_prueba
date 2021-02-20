const layout=require('../layout');








module.exports=(local=Array(1000).fill(''))=>{


    table=''
    for (i = 0; i < 50; i++) {
        table += `<td>${local[i]}<span><input type="button" value="Like"  class="likeBtn"><input type="button" value="Dislike" class="DislikeBtn"></td><tr><td><br></td></tr>`;
    }



    return layout({
        
        
        content:`
        <div id="header">
        <h2>Para probar las palabras</h2>
        <br/>
        <br/>
    </div>
    <form method="POST">


    <input name="fname" type="text" placeholder="Name"><br>
    <input name="kname" type="text" placeholder="Phone"><br>
    <input name="lname" type="text" placeholder="E-Mail"><br>
    <input name="nname" type="text" placeholder="E-Mail"><br>

    <input type="submit" value="Submit">
    </form>
    
    <div id="main">
        <input type="button" id="mostrar" value="Mostrar palabras">
        <input type="button" id="ocultar" value="Ocultar palabras">


        <table id="tabla">

            <tr>`+

            
            
            table
        
           + `</tr>
        
        </table>

   

    </div>
    <script src="main.js"></script>`


});

};