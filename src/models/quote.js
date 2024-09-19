import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
    text: { type: String, required:true, unique:true },
    author: { type: String, required: true }
})

export default mongoose.models.Quote || mongoose.model('Quote', QuoteSchema)