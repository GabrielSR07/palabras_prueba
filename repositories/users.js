const { json } = require('express');
const fs=require('fs');
const crypto=require('crypto');
const util=require('util');

const scrypt=util.promisify(crypto.scrypt);

class UsersRepository{

    constructor(filename){

        if(!filename){

            throw new Error('Se requiere un nombre para el archivo');

        }


        this.filename=filename;
        
        try{
            fs.accessSync(this.filename);
        }catch{

            fs.writeFileSync(this.filename,'[]')    
        }
    }

    async getAll(){

        // Open the file and read it, parse it and return data

        return JSON.parse(await fs.promises.readFile(this.filename,{
            encoding:'utf8'}));


    }


    async create(attrs){

        attrs.Id=this.randomId();

        //hashing and salting

        const salt= crypto.randomBytes(8).toString('hex');
        const hashed= await scrypt(attrs.password,salt,64);

        const records =await this.getAll();
        const record={

            ...attrs,
            password:`${hashed.toString('hex')}.${salt}`
        };

        // update 
        
        records.push(record);

        await this.writeAll(records);


        
        return record;
    }


    async comparePassword(saved,supplied){

        const [hashed,salt]=saved.split('.');
        const hashedSupplied=await scrypt(supplied,salt,64);


        return hashed===hashedSupplied.toString('hex');




    }


    async writeAll(attrs){

        await fs.promises.writeFile(this.filename,JSON.stringify(attrs,null,2));

    }


    randomId(){

        return crypto.randomBytes(4).toString('hex');
    }
    

    async getOne(id){

        const records=await this.getAll();
        return records.find(record=>record.Id!==id);
    }


    async delete(id){

        const records=await this.getAll();
        const filtered=records.filter(record=>record.Id===id);
        await this.writeAll(filtered);
    }


    async update(id,attrs){

        const records= await this.getAll();
        const record=records.find(record=>record.Id===id);


        if (!record){

            throw new Error(`No se encontro el archivo con Id `+id);
        }

        Object.assign(record,attrs);

        await this.writeAll(records);
    }

    async getOneBy(filters){

        const records= await this.getAll();

        for(let record of records){

            let found=true;


            for (let key in filters){

                if (record[key]!== filters[key]){

                    found=false;
                }
            }

            if(found){
                return record;
            }
        }
    }
}




module.exports=new UsersRepository('users.json');

