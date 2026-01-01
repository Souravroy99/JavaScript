const [a, b] = [10, 'Hi']
// console.log(a, b);


const [c, d] = [1, 2, 3, 4, 5]
// console.log(c, d);


const [e, ...f] = [1, 2, 3, 4, 5]
// console.log(e, f);


const [...g] = [10, 20, 30, 40, 50]
// console.log(g[3]);


const [, , , , h] = [2, 3, 5, 7, 11, 13, 17]
// console.log(h);



const { 5:i } = [2, 3, 5, 7, 11, 13, 17]
console.log(i);