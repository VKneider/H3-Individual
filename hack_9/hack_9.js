/**
* en result, reflejar con un objeto literal la integración
* de los 2 objetos
*
* 
* output => {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};

let bar = {
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}

let result={};

for (let i=0; i<Object.keys(foo).length;i++){
    result[Object.keys(foo)[i]] = Object.values(foo)[i];
    
}

for (let i=0; i<Object.keys(bar).length;i++){
    result[Object.keys(bar)[i]] = Object.values(bar)[i];
    
}


 

//export result
module.exports = result; 