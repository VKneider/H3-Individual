/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/

let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};

let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;
result={};




for ( let i=0; i< Object.values(foo.skills).length;i++){
    
    if (i<3 && i> 0){
        foo.skills[i]=foo.skills[i].toUpperCase();
    } else {
        foo.skills[i]=foo.skills[i][0].toUpperCase() + foo.skills[i].slice(1);
    }
    
}

foo.skills.splice(0,0,skills[0][0].toUpperCase()+ skills[0].slice(1),skills[1][0].toUpperCase()+ skills[1].slice(1)  );
foo.skills.splice(5,0,skills[2][0].toUpperCase()+ skills[2].slice(1))
foo.skills.push(skills[3][0].toUpperCase()+ skills[3].slice(1))

result.id=foo.id;
result.skills=foo.skills;
result.name=foo.name[0].toUpperCase() + foo.name.slice(1);
result.roles=[foo['roles'][0].toUpperCase()];
result.roles.splice(1,0,roleSuperUser,roleUser)

let len=levels.length;
result.levels =levels;
for (let i=0;i<len;i++){

  
  result.levels[i]['LEVEL']=Object.values(result.levels[i])[0][0].toUpperCase() + Object.values(levels[i])[0][2];



}


console.log(result)


//export result
module.exports = result; 