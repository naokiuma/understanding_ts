function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'max' }, { age: 20 }));
//これだと、ageにアクセスできないエラー。プロパティ 'age' は型 'object' に存在しません。
// const medgedObject1 = merge({name:'max'},{age:20});
// console.log(medgedObject1.age)
// もちろんこういうふうに型キャストをしても良い。が、面倒。
// const medgedObject = merge({name:'max'},{age:20}) as {name:string,age:number};
// 。。。で、
// こういう時に便利なのが、ジェネリック型。
// なぜ、前者のmerge1の場合はエラーになったのか？それはobjectと定義していたから。
//これにより、関数を定義した時に決まるのではなく、関数を呼ぶときに、「動的に」決めることができる！これがジェネリック型のパワ＾
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const medgedObject2 = merge2({ name: 'max' }, { age: 20 });
console.log(medgedObject2.age);
//こういう風にもかけるけど、medgedObject2のように、引数を入れた時に型推論してくれているので、わざわざ定義しなくても良い。
const mergedObject3 = merge2('name', 2);
console.log(mergedObject3);
//ジェネリックの制約。このようにextendsをつけると、最低限objectじゃ無いといけないよ！という制約をつけることができる。
// もちろんnumberでも、unionでもできる！
function merge3(objA, objB) {
    return Object.assign(objA, objB);
}
//上のLengthyがないと、tsはこの引数がlengthを持っているかわからないので、エラーになる
function countAndDescribe(element) {
    let descriptionText = '値がありません。';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('こんにちは！'));
// keyofで制約をつける。-------------
//こういう時に、objにはkeyのプロパティがあることを保証したい！
// function extractAndConvert(obj,key){
// 	return 'value：' + obj[key];
// }
// こうする!Tは、Uのプロパティの一つであるという型
function extractAndConvert(obj, key) {
    return 'value：' + obj[key];
}
//# sourceMappingURL=app.js.map