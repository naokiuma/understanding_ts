"use strict";
// const person:{name:string,age:number,hobbies:string[],role:[number,string]} = {
//     name:'yota',
//     age:30,
//     hobbies:['sports','cooking'],
//     role:[2,'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOUR";
})(Role || (Role = {}));
const person = {
    name: 'yota',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
let activities;
activities = ['sports', '5']; //こんなふうに複数のarrayの型を指定したい場合はこんな感じ
for (const hovvy of person.hobbies) {
    console.log(hovvy.toUpperCase());
}
if (person.role == 5) {
    console.log(person.role);
}
//# sourceMappingURL=objs-arrays-enums.js.map