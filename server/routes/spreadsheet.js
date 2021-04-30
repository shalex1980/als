const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('../../client_secret.json')

async function sheetApp(form) {
    const doc = new GoogleSpreadsheet('1BxO_vMjV8PYPXFegI651LyTe7m9-gAbHs3eeVmG2lUk')

    await doc.useServiceAccountAuth(creds)

    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    console.log(sheet.title);

    await sheet.addRow({DATA: form.data, NAME: form.name, COMPANY: form.company, MESSAGE: form.message })
    
}   

// app()
// .then(result =>{
//     console.log('All Right')
// })
// .catch(console.log)

exports.sheetApp = sheetApp;