let mem = [0]

let pos = 50

let i = 0, j = 0

// const fibonacci = x =>  x > 1? fibonacci(x - 1) + fibonacci(x - 2):x;

const fibonacci = x =>  {i++; return x > 1? fibonacci(x - 1) + fibonacci(x - 2):x}

function dLFibonacci(x, mem) {
    if(!mem[x]) {
        mem[x] = x > 1 ? dLFibonacci(x - 1, mem) + dLFibonacci(x - 2, mem): x;
    }
    j++
    return mem[x]
}

// for (i = 0; i < 200; i++) {
//     mem[i] = dLFibonacci(i, mem)
// }

// console.log(fibonacci(pos))
// console.log(`${dLFibonacci(pos, mem)}`)
resultado = dLFibonacci(pos, mem)
// for (i = 0; i <= pos; i++) {
//     console.log(`${mem[i]}`)
// // }
console.log(`
resultado fib:${fibonacci(pos)}
`)
// console.table(mem)
console.log(`
resultado fibdl:${resultado}
`)
console.log(`${j} vs ${i}
`)
