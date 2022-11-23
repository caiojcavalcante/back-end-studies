// function fibonacci(x) {
//     return x >= 2?fibonacci(x-1) + fibonacci(x-2):x;
// }

// const fibonacci = x => {return x > 1? fibonacci(x - 1) + fibonacci(x - 2):x;}
const fs = require('fs')
const chalk = require('chalk')

// let data = fs.readFile

let mem = []

function treatError(err) {throw new Error(chalk.red(err.code, 'erro arquivo diretorio'))}

async function readFile(filePath) {
    const encoding = 'utf-8';
    try {
        let data = await fs.promises.readFile(filePath, encoding)
        data = data.split(',')
        console.log(chalk.blue(data))
    }catch(err) {treatError(err)}
}

mem = readFile('./fib-db.json', mem)
// mem = mem.split(', ')
console.log(mem)

function dLFibonacci(x) {
    if (x < mem.length) {return mem[x]}
    else {
        mem[x] = x > 1? dLFibonacci(x - 1) + dLFibonacci(x - 2):x;
        console.log(mem[x])
    }

    return mem[x]
}

// dLFibonacci(10)

// console.log(dLFibonacci(6))
// console.log(mem)