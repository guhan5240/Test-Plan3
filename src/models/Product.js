import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    images: [
        {
            filename: String,
            url: String
        }
    ]
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);
