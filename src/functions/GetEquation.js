function GetEquation({ ranges, operators=[] }) {
    
    if (operators.length === 0) operators = ["+", "-", "*", "/"]    
    const operator = operators[Math.floor(Math.random() * operators.length)]

    const { add1, add2, mul1, mul2 } = ranges

    const rand = (range) => Math.floor(Math.random() * (range.max - range.min + 1)) + range.min

    let n1, n2;

    if (operator === "/") {
        n2 = rand(mul1)
        const quotient = rand(mul2)
        n1 = n2 * quotient
    } else if (operator === "*") {
        n1 = rand(mul1)
        n2 = rand(mul2)
    } else if (operator === "+") {
        n1 = rand(add1)
        n2 = rand(add2)
    } else {
        const a = rand(add1)
        const b = rand(add2)
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