const  mongoose=require('mongoose');

const affecterProuitShema=new mongoose.Schema(
    {
        id_user:{
            type:mongoose.Schema.ObjectId,
            ref:'user',
            require:[true,'id_user require']
        },
        quantite:{
            type:Number,
            require:[true,'description require']
        },
        id_produit:{
            type:mongoose.Schema.ObjectId,
            ref:'produit',
            require:[true,'id_produit require']
        },
      

    },{timestamps:true}
);



const AffecterProuit=mongoose.model('affecterProuit',affecterProuitShema);
module.exports=AffecterProuit;