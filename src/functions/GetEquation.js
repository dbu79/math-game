function GetEquation(min, max, operators = ["*", "-", "+", "/"]) {

    const operator = operators[Math.floor(Math.random() * operators.length)]

    const randInt = () => Math.floor(Math.random() * (max - min + 1)) + min

    let n1, n2; 

    if (operator === "/") {
        n2 = randInt()
        if (n2 === 0) n2 = 1 
        const quotient = randInt()
        n1 = n2 * quotient
    } else {
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