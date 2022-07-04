const chalk = require('chalk')
const fs = require('fs')

readFile('./arquivos/texto1.md')

function extractLink(text) {
    return text.match(/\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm)
}

function treatError(err) {
    // throw new Error(chalk.red(err.code, 'erro arquivo diretorio'))
    console.log(err)
}

export default async function readFile(filePath) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(filePath, encoding)
        console.log(chalk.cyan(extractLink(texto)))
    }catch(err) {console.log(err)}
}
// function readFile(file) {
//     const coding = 'utf-8'
//     fs.readFile(file, coding, function(err, data) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log(data)
//     })
// }

// console.log(chalk.blue('sucesso'))