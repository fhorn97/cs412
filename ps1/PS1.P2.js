const getOperator = (expression) => {
    switch (expression.substring(1,2)) {
        case '+': return (left, right) => left + right;
            break;

        case '*': return (left, right) => left * right;
            break;

        case '-': return (left, right) => left - right;
            break;

        case '/': return (left, right) => left / right;
            break;
    }
}
const mathFunction = (expression) => {
    const left = Number(expression.charAt(0));
    const right = Number(expression.charAt(2));
    const evaluate = getOperator(expression)(left, right);
    return evaluate;
}
module.exports = mathFunction;
