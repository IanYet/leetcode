console.time('test')
for(let i=0;i<30000;i++){
    for(let j=0;j<1000;j++){}
}
console.timeEnd('test')