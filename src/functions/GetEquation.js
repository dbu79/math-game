function GetEquation({ minAdd1, maxAdd1, minMul1, maxMul1, minAdd2, maxAdd2, minMul2, maxMul2, operators=[] }) {
    
    if (operators.length === 0) operators = ["+", "-", "*", "/"]    
    const operator = operators[Math.floor(Math.random() * operators.length)]

    const randA1 = () => Math.floor(Math.random() * (maxAdd1 - minAdd1 + 1)) + minAdd1
    const randA2 = () => Math.floor(Math.random() * (maxAdd2 - minAdd2 + 1)) + minAdd2
    const randM1 = () => Math.floor(Math.random() * (maxMul1 - minMul1 + 1)) + minMul1
    const randM2 = () => Math.floor(Math.random() * (maxMul2 - minMul2 + 1)) + minMul2

    let n1, n2;

    if (operator === "/") {
        n2 = randM1()
        const quotient = randM2()
        n1 = n2 * quotient
    } else if (operator === "*") {
        n1 = randM1()
        n2 = randM2()
    } else if (operator === "+") {
        n1 = randA1()
        n2 = randA2()
    } else {
        const a = randA1()
        const b = randA2()
        n1 = a + b
        n2 = b  
    }
    
    const operations = {
        "+": (a, b) => a + b, 
        "-": (a, b) => a - b, 
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }

    return { n1, n2, operator, answer: operations[operator](n1, n2) }
}

export default GetEquation