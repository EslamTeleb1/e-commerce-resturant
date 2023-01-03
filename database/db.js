const mongoose = require("mongoose");


const mongooseConnect= async()=>{
    mongoose.set('strictQuery', false);

    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
    }
    
    catch(e)
    {
        console.log(e);
    }
}

const kittySchema = new mongoose.Schema({
    name: String
  });

  async()=>{
    const Kitten = mongoose.model('dogs', kittySchema);
    const silence = new Kitten({ name: 'loud' });

   await silence.save();
   const kittens = await Kitten.find();
    console.log(kittens);
   console.log(silence.name); // 'Silence'
  }

  
    
  



module.exports=mongooseConnect();