import mongoose from 'mongoose'

const uri: string = 'mongodb://localhost:27017/auctionsdb'

mongoose.connect(uri, (err: any) => {
    if(err) {
        console.log(err.message)
    } else{
        console.log("Successfully connected to database")
    }
})

export const ItemSchema = new mongoose.Schema( 
{ 
    "name": {type:String, required:true},
    "description": {type:String, required:true},
    "year": {type:Date, required:true},
    "photo": {type:String, required:true},
    "initial_price": {type:Number, required:true},
    "actual_price": {type:Number, required:true},
    "max_date": {type:Date, required:true},
    "status": {type:Boolean, default:1},
    "bidder_name": {type:String},
    "owner": {
        "name": {type:String, required:true},
        "email": {type:String, required:true},       
    }
});

const Items = mongoose.model('Items', ItemSchema);
export default Items;