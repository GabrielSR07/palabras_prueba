"use strict";
const usersRepo=require('../../repositories/users')
const express=require('express');
const signUpTemplate=require('../../Views/admin/auth/signup');
const { body } = require('express-validator');

const hyphenopoly = require("hyphenopoly");




const hyphenator = hyphenopoly.config({
    "require": ["de", "en-us","es"],
    "hyphen": "-",
    "exceptions": {
        "es": "cie-lo"
    }
});

async function hyphenate_en(text) {
    const hyphenateText = await hyphenator.get("es");
    return hyphenateText(text);
}

const router=express.Router();




router.get('/',(req,res)=>{
    res.send(signUpTemplate());
    
    });



router.post('/',async (req,res)=>{

    const {fname,lname,kname,nname} = req.body;
    var words=fname+' '+lname+' '+kname+' '+nname;
    var newone=await hyphenate_en(words);
    console.log(newone);
    newone=newone.split(/-| /)
    var i;
    var j=0;
    const local=[];
    
    while (j<51){
    words='';
    for (i = 0; i < 3; i++) {
         words+=newone[Math.floor(Math.random() * newone.length)] ;
      }
    local.push(words);
    j++
    }


    console.log(local);
    
    
    res.send(signUpTemplate(local));
   
        
        });

module.exports=router;
    