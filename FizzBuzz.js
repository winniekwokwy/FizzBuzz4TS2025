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
    let msg = '';
    if (number%3===0) {
        msg += 'Fizz';
    }
    if (number%5===0) {
        msg += 'Buzz';
    }
    if (number%7===0){
        msg += 'Bang';
    }
    if (number%11===0){
        msg = 'Bong';
    }
    if (number%13===0){
        if (msg.indexOf('B')!==-1){
            msg.split().splice(msg.indexOf('B', 0, 'Fezz')).join();
        }
        else {
            msg += 'Fezz';
        }
    }
    return msg;
}

for (let i=1; i<=100; i++) {
    let msg = fizzBuzz(i);
    if (msg!=='')
        console.log(msg);
    else
        console.log(i);
}


