import connectDB from "../utils/database"
import Quote from "../models/quote"

export const listQuotes = async () => {
    await connectDB()
    const quotes = await Quote.find()
    return quotes
}

export const createQuote = async (quote) => {
    await connectDB()
    const createdQuote = await Quote.create(quote)
    return createdQuote
}

export const deleteQuote = async (id) => {
    await connectDB()
    await Quote.findByIdAndDelete(id)
}

export const updateQuote = async (id, newBody) => {
    await connectDB()
    await Quote.findByIdAndUpdate(id, newBody)
}