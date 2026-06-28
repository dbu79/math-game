function GetEquation(min, max) {
    const sign = ["+", "-", "*", "/"]
    const operator = sign[Math.floor(Math.random() * sign.length)]

    const randInt = () => Math.floor(Math.random() * (max - min + 1)) + min

    let n1, n2; 

    if (operator === "/") {
        n2 = randInt()
        const quotient = randInt()

        n1 = n2 * quotient

        while (n1 < min || n1 > max) { 
            n2 = randInt()
            const q = randInt()
            n1 = n2 * q 
        }
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

    const answer = operations[operator](n1, n2)
    return {n1, n2, operator, answer}
}
export default GetEquation