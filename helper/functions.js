const fs = require('fs');

export const writePost = (mail) => {
    const content = 'Some content!'

    try {
    const data = fs.writeFileSync('../data/test.txt', content)
    //file written successfully
    } catch (err) {
    console.error(err)
    }
}