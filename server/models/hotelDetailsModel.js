import mongoose from "mongoose";

const HotelDetailsSchema = new mongoose.Schema({
    admin_id :{
        type: String,
        required: true,
        unique:true
    },

    hotel_name :{
        type: String,
        required: true,
        unique:true
    },

    hotel_rating :{
        type: Number,
        required: true,
        unique:true
    },

    hotel_start_date:{
        type: Date,
    },

    address:{
        locality:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }
    },

    amenties:{
        type:Array,
    },

    photos:{
        type:String,
    },

    check_in:{
        type:String
    },

    check_out:{
        type:String
    }

    
}, {timestamps:true})

export default mongoose.model("HotelDetails", HotelDetailsSchema)