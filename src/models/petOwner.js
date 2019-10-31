import mongoose from "mongoose";

export const petOwner = mongoose.model("petOwner", { 
    name: {
        type: String,
        required: true
      },
      pet: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Cat"
      },
    
    });