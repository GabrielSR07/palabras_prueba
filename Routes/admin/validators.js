const {check}=require('express-validator');
const usersRepo=require('../../repositories/users');


module.exports={



    requireEmail:check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Email invalido")
    .custom(async (email)=>{

        const existingUser=await usersRepo.getOneBy({email});

        if(existingUser){
            throw new Error('Email en uso');
        }
    
    }),
    
    
    requirePass:
    check('password')
    .trim()
    .isLength({min:5,max:10})
    .withMessage('Clave invalida'),
    
    

    requirePassConfirm: check('passwordConfirm')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Must be between 4 and 20 characters')
    .custom((passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password) {
        throw new Error('Passwords must match');
      }else{
        return true
      }
    })

    // El else se a;adio por comportamiento raro de node, te tira error si no
};