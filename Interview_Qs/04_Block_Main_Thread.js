console.log('Start');

const start = Date.now()

while(Date.now() - start < 2000) {
    // console.log("Blocking the main thread for 2 seconds"); // Synchronously
}

for(let i=1 ; i<=5 ; i++)
{
    console.log(i);
}

console.log('End');