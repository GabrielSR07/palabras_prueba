const layout=require('../layout');

const getError=(errors,property)=>{

    //property is email||password||paswordConfirm

    try{


        return errors.mapped()[property].msg
    }catch (err){
        return '';
    }


};

module.exports=({req,errors,local=['','','']})=>{

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

        <form method="POST">

        <table id="tabla">

            <tr>
        
            <td id="first">${local[0]}<span><input type="button" value="Like" id="firstLike" class="btn"><input type="button" value="Dislike" id="firstDislike"></td>
        
            <td id="second">${local[1]} <span><input type="button" value="Like" id="secondLike" class="btn"><input type="button" value="Dislike" id="secondDislike"></td>
        
            <td id="third"> ${local[2]} <span><input type="button" value="Like" id="thirdLike" class="btn"><input type="button" value="Dislike" id="thirdDislike"></td>
        
            </tr>
        
        </table>

    <input type="submit" value="Submit">
    </form>

    </div>
    <script src="main.js"></script>


`});

};