let FunctionP3 = (originalString, decorator) => {
    let processed = decorator(originalString);
    return processed;
}

const lambda1 = (originalString) => {
    splitonc = originalString.replace(/c/gi, '#c').split('#')
    return splitonc;}

const lambda2 = (originalString) => {
    let myObject = {
        originalString: originalString,
        modifiedString: originalString.replace(/a/gi, 'A'),
        numberReplaced: originalString.match(/a/gi).length,
        length: originalString.replace(/a/gi, 'A').length
    };
    return myObject;}

console.log(`${FunctionP3('supercalifragilisticexpialidocious', lambda1)}`);
console.log(`${FunctionP3('supercalifragilisticexpialidocious', lambda2)}`);
module.exports = {
    FunctionP3: FunctionP3,
    lambda1: lambda1,
    lambda2: lambda2
};

