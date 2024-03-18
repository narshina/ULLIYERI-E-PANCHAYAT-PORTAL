import mongoose from "mongoose";

let newsschema=mongoose.Schema(
    {
        news:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        userid:{
            type:String,
            required:true
        }
    }
)
let News=mongoose.model('news',newsschema)
export default News