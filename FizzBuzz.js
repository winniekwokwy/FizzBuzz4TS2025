
function fizzBuzz(number, rule){
    let msg = [];
    switch (rule){
    case '3':
        if (number%3===0) {
            msg.push('Fizz');
        }
        break;
    case '5':
        if (number%5===0) {
            msg.push('Buzz');
        }
        break;
    case '13':
        if (number%13===0){
            let index = msg.findIndex((value, index)=>{
                return value.charAt(0)==='B';
            })
            if (index!==-1){
                msg.splice(index, 0, 'Fezz');
            }
            else {
                msg.push('Fezz');
            }
        }
        break;
    }
    return msg.join('');
}

const prompt = require("prompt-sync")();
const maxNumber = prompt("Please input the maximum number: ");
if (!Number.isNaN(maxNumber) && maxNumber > 0) {
    const rule = prompt("Please tell which rule you\'d like to apply (3, 5 or 13?): ");
    if (!Number.isNaN(rule) && (rule==='3' || rule==='5' || rule==='13')){
        for (let i=1; i<=maxNumber; i++) {
            let msg = fizzBuzz(i, rule);
            if (msg!=='')
                console.log(msg);
            else
                console.log(i);
        }
    } else {
        console.log('Invalid rule. Please try again.');
    }
} else {
    console.log('Input error. Please try again.');
}



