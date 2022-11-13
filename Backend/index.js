import express from "express";
import instagramGetUrl from 'instagram-url-direct'
const port = process.env.PORT || 3000

const app = express() 

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'Ok'
    })
    return
})

app.get('/dl', async (req, res) => {
    try {
        const response = await instagramGetUrl(req.query.url)
        res.status(200).json({
            status: 'sucess',
            response: response
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
            response: e.message
        })
    }
    return
}) 

app.listen(port, () => console.log(`App running on ${port}`))