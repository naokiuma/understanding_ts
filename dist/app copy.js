const e1 = {
    name: 'max',
    privileges: ['creatr-server'],
    startDate: new Date()
};
function printEmployeeInmterface(emp) {
    console.log(emp.name); //nameは両方に存在するので、問題なし。
    //これは実行できない。typeofはjsの関数であり、Adminはts上で定義した型なので、エラーになる。
    // if(typeof emp === 'Admin'){
    // 	console.log(emp.privileges)
    // }
    // なのでinを使い、こうする。
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
}
let test = {
    name: 'kevin',
    privileges: ['creatr-server']
};
printEmployeeInmterface(test);
function Combinable(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('移動速度：' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 200 });
// 型キャストについて
// typescirptはdomを取得する際、それがどのような構造か？まではわからない。
// なので、この場合「!」と、<HTMLInputElement>を記載してあげる、
//<HTMLInputElement>はglobalに使えるhtmlの型。
// const userInputElement = <HTMLInputElement>document.getElementById('totototo')!;
// なお。reactではjsxと衝突するので、こう書く。
const userInputElement = document.getElementById('totototo');
userInputElement.value = 'こんにちは';
//# sourceMappingURL=app%20copy.js.map