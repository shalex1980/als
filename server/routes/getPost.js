const app = require("../server");

const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('../../client_secret.json')

async function sheetApp(form) {
    const doc = new GoogleSpreadsheet('1BxO_vMjV8PYPXFegI651LyTe7m9-gAbHs3eeVmG2lUk')

    await doc.useServiceAccountAuth(creds)

    await doc.loadInfo()
    //console.log(doc.title)

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    //console.log(sheet.title);

    await sheet.addRow({DATA: form.data, NAME: form.name, COMPANY: form.company, EMAIL: form.email, MESSAGE: form.message })
    
}   


exports.post = (app) => {
    return (req, res) => {
        console.log("SEND ON SERVER")
        console.log(new Date())
        console.log(req.body) 
        const form = {...req.body, data: new Date()}

        sheetApp(form)
            .then(result => {
                console.log('All RIght')
                res.send('OK')
            })
            .catch(console.log)


        //return res.send('OK')
    }
}