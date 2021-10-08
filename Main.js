const frases = {
    startFrase: ['Spend time with', 'Play with', 'Call'],
    endFrase: ['extrangers.', 'someone.', 'yourself.'],
    message: ['When feeling bad: ', 'Every time you are doubting yourself: ', 'If you feel alone: ']
};

// this will create a random sentence with the elements inside frases
const frase = () => {
    // if (frases.message[Math.floor(Math.random() * 3)] === )
    let returnedFrase = `${frases.startFrase[Math.floor(Math.random() * 3)]} ${frases.endFrase[Math.floor(Math.random() * 3)]}`;
    return returnedFrase;
}
// this will make sure that the message that the program is creating is not repeated
const message = () => {
    let firstMessage = frases.message[Math.floor(Math.random() * 3)];
    let secondMessage = frases.message[Math.floor(Math.random() * 3)];
    let thirdMessage = frases.message[Math.floor(Math.random() * 3)];
    while (secondMessage === firstMessage) {
        secondMessage = frases.message[Math.floor(Math.random() * 3)]
    };
    while (thirdMessage ===  secondMessage || thirdMessage === firstMessage) {
        thirdMessage = frases.message[Math.floor(Math.random() * 3)]
    };
    const finalMessage01 = [firstMessage, frase()];
    const finalMessage02 = [secondMessage, frase()];
    const finalMessage03 = [thirdMessage, frase()];
    while (finalMessage02[1] === finalMessage01[1]) {
        finalMessage02.pop();
        finalMessage02.push(frase())
    }
    while (finalMessage03[1] === finalMessage01[1] || finalMessage03[1] === finalMessage02[1]) {
        finalMessage03.pop();
        finalMessage03.push(frase())
    }
    return `
    ${finalMessage01.join('')}
    ${finalMessage02.join('')}
    ${finalMessage03.join('')}
    `
};

console.log(message());


// console.log(fullFrase());
// console.log(fullFrase());
// console.log(fullFrase());
