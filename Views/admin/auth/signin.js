
const layout=require('../layout');

module.exports=({req})=>{

    return layout({

content:  `

    <div>
        <form method="POST">
        <input name="email" placeholder="email"/>
        <input name="password" placeholder="password"/>
        <button> Inicia sesion</button>
        </form>
    </div>
`

});

}