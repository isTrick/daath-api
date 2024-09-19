import { Router } from "express"
import { listQuotes, createQuote, deleteQuote, updateQuote } from "../service/quote"

const router = Router()

router.get('/', async (req, res) => {
    const quoteList = await listQuotes()
    res.send(quoteList)
})

router.post('/', async (req, res) => {
    try {
        const quote = await createQuote(req.body)
        res.status(201).send(quote)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.delete('/:quoteId', async (req, res) => {
    await deleteQuote(req.params.quoteId)
    res.send()
})

router.put('/:quoteId', async (req, res) => {
    await updateQuote(req.params.quoteId, req.body)
    res.send()
})

export default router