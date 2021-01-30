/*
let user = {
    name: "Ronald"
};

console.log(user);

// Alterando a propriedade de um objeto
user.name = "Outro nome 1";
console.log(user);

user["name"] = "Outro nome 2";
console.log(user);

const prop = "name";
user[prop] = "Outro nome 3";
console.log(user);

// Criando uma propriedade
user.lastName = "Sobrenome"
console.log(user);

// Deletando uma propriedade
delete user.name
console.log(user);
*/

const user = {
    name: "Ronald",
    lastName: "McDonalds"
};

// Recupera as chaves e os valores das chaves do objeto
console.log("Propriedades do objeto user: ", Object.keys(user));
console.log("Propriedades do objeto user: ", Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log("Propriedades do objeto user: ", Object.entries(user));

// Mergear\Concatenar propriedades de objetos
Object.assign(user, {fullName: "Ronald McDonalds"});
console.log("\nAdiciona a propriedade fullName no objeto user: ", Object.entries(user));
console.log("\nRetorna um novo objeto mergeando dois ou mais objetos: ", Object.assign({}, user, {age: 26}));

// Previne todas as alterações em um objeto
const newObj = { foo: "bar"};
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nVariável newObj após as alterações", newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const newObj2 = { foo: "bar"};
Object.seal(newObj2);

newObj2.foo = "changes";
delete newObj2.foo;
newObj2.bar = "foo";

console.log("\nVariável newObj2 após as alterações", newObj2);