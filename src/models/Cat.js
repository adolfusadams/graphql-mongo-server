import mongoose from "mongoose";

export const Cat = mongoose.model("Cat", { name: String, breed: String, gender: String });