// Starting a web server in node

const express=require('express');
const bodyParser=require('body-parser');
const cookieSession=require('cookie-session');
const authRouter=require('./Routes/admin/auth');


const app= express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieSession({
    keys:['vf3yvf3ivfiuy3jkbeu3ewf']
}));


app.use(authRouter);
// Port of the machine (where the server receives connections)
app.listen(3010,()=>{

    console.log('Listening');
});