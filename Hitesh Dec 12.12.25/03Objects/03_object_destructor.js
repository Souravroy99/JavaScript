const obj = {
    name: "Sourav",
    student: "JGEC",
    department: "IT"
}

console.log(obj.department);

const {department} = obj;
console.log(department);

const {department: dp} = obj ;
console.log(dp);


const {name: nm, student: st, department: dprt} = obj ;
console.log(nm, st, dprt);