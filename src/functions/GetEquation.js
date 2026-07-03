function GetEquation(minAdd, maxAdd, minMult, maxMult, operators = ["+", "-", "*", "/"]) {

    const operator = operators[Math.floor(Math.random() * operators.length)]

    const randInt = () => Math.floor(Math.random() * (maxAdd - minAdd + 1)) + minAdd
    const randInt2 = () => Math.floor(Math.random() * (maxMult - minMult + 1)) + minMult 

    let n1, n2; 

    if (operator === "/") {
        n2 = randInt2()
        if (n2 === 0) n2 = 1 
        const quotient = randInt2()
        n1 = n2 * quotient
    } else if (operator === "*") {
        n1 = randInt2()
        n2 = randInt2()
    }
    
    else {
        n1 = randInt()
        n2 = randInt()
    }

    const operations = {
        "+": (a, b) => a + b, 
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }

    return {n1, n2, operator, answer: operations[operator](n1, n2)}
}
export default GetEquation