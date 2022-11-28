import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input your score: ', (score)=> {
    let grade = '';
    if(score >= 80) {
        grade = "A";
    }else if(score >=70) {
        grade = "B";
    }else if(score >=60) {
        grade = "C";
    }else if(score >=50) {
        grade = "D";
    }else {
        grade = "F";
    }

    console.log(`Your grade is ${grade}.`);
    rl.close();
});