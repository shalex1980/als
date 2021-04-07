const express = require('express')
const next = require('next')
const config = require('config')
const bodyParser = require('body-parser')
const fs = require('fs')

const getPost = require('./routes/getPost')

const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})
const handler = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        server.use(bodyParser.json())

        server.post('/api/post', (req, res) => {
            console.log("servering send")
            console.log(req.body)
            const content = 'Some content!'

            try {
            const data = fs.writeFileSync('./data/test.txt', content)
            //file written successfully
            } catch (err) {
            console.error(err)
            }
        })

        //server.post('/api/post', getPost.post)
       
        server.get('*', handler)

        server.listen(process.env.PORT, () => {
            console.log(`<< listening PORT ${process.env.PORT}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })

    module.exports = app