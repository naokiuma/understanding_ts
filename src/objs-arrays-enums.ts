// const person:{name:string,age:number,hobbies:string[],role:[number,string]} = {
//     name:'yota',
//     age:30,
//     hobbies:['sports','cooking'],
//     role:[2,'author']
// };

enum Role{
    ADMIN = 5,
    READ_ONLY,//自動で6になる。
    AUTHOR = 'AUTHOUR'
}
const person = {
    name:'yota',
    age:30,
    hobbies:['sports','cooking'],
    role:Role.ADMIN
};

let activities:any[];
activities = ['sports','5']//こんなふうに複数のarrayの型を指定したい場合はこんな感じ


for(const hovvy of person.hobbies){
    console.log(hovvy.toUpperCase())
}

if(person.role == 5){
    console.log(person.role)

}