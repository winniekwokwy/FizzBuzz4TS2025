/*
To get the repository from GitHub:-
1. Go to the folder that you'd like to put the respository in it
2. Go to PowerShell
3. Run git init
4. Run git remote add origin [link to the respository on GitHub]

To commit changes on command prompt:-
git commit -m [comments]

To push the code to GitHub:-
git push -u origin main
git push
git push origin main
*/
function fizzBuzz(number){
    let msg = [];
    if (number%3===0) {
        msg.push('Fizz');
    }
    if (number%5===0) {
        msg.push('Buzz');
    }
    if (number%7===0){
        msg.push('Bang');
    }
    if (number%11===0){
        msg.length=0;
        msg.push('Bong');
    }
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
    if (number%17===0){
        msg.reverse();
    }
    return msg.join('');
}

for (let i=1; i<=300; i++) {
    let msg = fizzBuzz(i);
    if (msg!=='')
        console.log(msg);
    else
        console.log(i);
}


