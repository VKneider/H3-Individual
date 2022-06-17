/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};
result.name = result.name.toUpperCase()[0]+ result.name.slice(1); 
result.role = result.role.toUpperCase(0);

console.log(result);
//export result
module.exports = result; 
