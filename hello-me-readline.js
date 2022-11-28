import { rawListeners } from 'process';
import * as readline from 'readline';

const rd = readline.createInterface(process.stdin, process.stdout);

rl.question('Input your name: ', (name)=> {
    console.log(`Hello ${name}.`);
    rl.close();
});