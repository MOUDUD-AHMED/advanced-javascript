 const num = [2, 5, 6, 8];
const output = [];

for(let i = 0; i < num.length; i++){
    const element = num[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

const result = num.map(x => x * x);
console.log(result);

const big = num.filter(x => x > 5);
console.log(big);