let quotes = []

export const listQuotes = () => {
    return quotes
}

export const createQuote = (quote) => {
    quotes.push(quote)
}