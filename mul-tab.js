const n = parseInt(process.argv[2]);
for(let j = 1; j <= 12; j++) {
    let line = '';
    for(let i=2; i <= 11; i++) {
        line = `${line}\t${i * j}`;
    }
    console.log(line);
}