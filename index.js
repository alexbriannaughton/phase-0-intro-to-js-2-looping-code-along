// Code your solutions in this file

function writeCards(nameArray, eventName) {
    let messages = []
    for (let i = 0; i < nameArray.length; i++) {

        messages.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}