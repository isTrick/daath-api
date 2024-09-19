import { Router } from "express"
import { listQuotes } from "../service/quote"
import { createQuote } from "../service/quote"

const router = Router()

router.get('/', async (req, res) => {
    const quoteList = await listQuotes()
    res.send(quoteList)
})

router.post('/', async (req, res) => {
    const quote = await createQuote(req.body)
    res.status(201).send(quote)
})

export default router