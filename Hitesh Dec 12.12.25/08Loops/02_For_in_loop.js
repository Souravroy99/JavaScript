// Object, Array

const obj = {
    JS: "Javascript",
    "C++": "CPP",
    "C#": "C-Sharp",
}

for(const key in obj) {
    console.log(`${key} --> ${obj[key]}`);
}


const arr = [2,3,5,7,11]
for(const key in arr) {
    console.log(`${key} --> ${arr[key]}`);
}